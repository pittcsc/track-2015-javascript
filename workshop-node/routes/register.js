'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

router.post('/', function(req, res, next) {
    res.json({
        "message": "Registering..."
    });
});

module.exports = router;
