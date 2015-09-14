'use strict';

var express = require('express'),
    router = express.Router();

router.post('/', function(req, res, next) {
    res.json({
        "message": "Deleted!"
    });
});

module.exports = router;
