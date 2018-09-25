var log = require('logger')('model-vehicle-models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var types = require('validators').types;

var model = Schema({
    title: {
        type: String,
        required: true,
        validator: types.title({
            length: 100
        })
    },
    make: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'vehicle-makes',
        validator: types.ref()
    }
}, {collection: 'vehicle-models'});

model.plugin(mongins);
model.plugin(mongins.user);
model.plugin(mongins.createdAt());
model.plugin(mongins.updatedAt());

module.exports = mongoose.model('vehicle-models', model);