'use strict';

//express and common middleware
var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    app = express();
//port
app.port = 3000;
//middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//db
var mongoose = require('mongoose'),
    db = require('./db');
mongoose.connect(db);
//models
var userModel = require(path.join(__dirname, 'models/user')),
    pictureModel = require(path.join(__dirname, 'models/picture'));
//auth, session
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
//static assets
app.use(express.static(path.join(__dirname, 'public')));
//routes
//index
var indexRoute = require(path.join(__dirname, 'routes/index'));
app.use('/', indexRoute);
//user api: login and register
var loginRoute = require(path.join(__dirname, 'routes/login')),
    registerRoute = require(path.join(__dirname, 'routes/register'));
app.use('/login', loginRoute);
app.use('/register', registerRoute);
//picture api: read, save, delete
var readRoute = require(path.join(__dirname, 'routes/read')),
    saveRoute = require(path.join(__dirname, 'routes/save')),
    deleteRoute = require(path.join(__dirname, 'routes/delete'));
app.use('/read', readRoute);
app.use('/save', saveRoute);
app.use('/delete', deleteRoute);
//error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});
//server
var server = require('http').createServer(app);
    server.listen(app.port, function(){
        console.log('Server listening on port ' + app.port);
});

module.exports = app;
