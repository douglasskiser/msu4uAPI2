'use strict';

var Audio = require('../audio/audio.model');
var path = require('path');
var fs = require('fs');


exports.register = function(socket) {
    socket.on('audio:removed', function() {
        console.log('audio removed');
        Audio.find(function(err, files) {
            if (!err) {
                console.log('sending all updates');
                socket.emit('audio:update:all', files);
            }
        });

        
    });
};
