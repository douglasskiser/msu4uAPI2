'use strict';

var _ = require('lodash');
var Audio = require('./audio.model');
var path = require('path');
var fs = require('fs');

// Get list of audio files
exports.index = function(req, res) {
  Audio.find(function (err, files) {
    if(err) { return res.send(500, err); }
    return res.json(200, files);
  });
};

exports.sendFile = function(req, res) {
  var fileName = req.params.fileName;
  var filePath = path.join(__dirname, '/../../uploads/' + fileName);

  fs.exists(filePath, function(exists) {
    if (!exists) {
      return res.send(404);
    }

    res.setHeader('Content-Type', 'audio/mpeg');
    var stream = fs.createReadStream(filePath, {bufferSize: 64 * 1024});
    stream.pipe(res);
  });
};

// Download an audio file
exports.download = function(req, res) {
  var fileName = req.params.fileName;
  var filePath = path.join(__dirname, '/../../uploads/' + fileName);

  fs.exists(filePath, function(exists) {
    if (!exists) {
      return res.send(404);
    }

    res.download(filePath);
  });
};

// Remove an audio file
exports.remove = function(req, res) {
  Audio.remove({fileName: req.params.fileName}, function(err) {
    if(err) { return res.send(500, err); }
    return res.json(200);
  });
};