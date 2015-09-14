var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Picture = new Schema({});

module.exports = mongoose.model('Picture', Picture);
