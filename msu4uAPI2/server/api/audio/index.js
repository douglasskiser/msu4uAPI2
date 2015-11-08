'use strict';

var express = require('express');
var controller = require('./audio.controller');

var router = express.Router();

router.get('/', controller.index);
//router.get('/:id', controller.download);
router.get('/:fileName', controller.sendFile);
router.get('/:fileName/download', controller.download);
router.delete('/:fileName', controller.remove);

module.exports = router;