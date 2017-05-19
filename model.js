var log = require('logger')('model-vehicle-models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var types = require('validators').types;

var model = Schema({
    has: {type: Object, default: {}},
    allowed: {type: Object, default: {}},
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

model.set('toJSON', {
    getters: true,
    //virtuals: false,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
    }
});

model.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('vehicle-models', model);