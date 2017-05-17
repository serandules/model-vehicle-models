var mongoose = require('mongoose');

var model;

try {
    model = mongoose.model('vehicle-models') || require('./model');
} catch (e) {
    model = require('./model');
}

module.exports = model;