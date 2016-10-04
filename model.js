var log = require('logger')('vehicle-model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var model = Schema({
    title: String,
    make: {type: Schema.Types.ObjectId, ref: 'VehicleMake'},
    has: {type: Object, default: {}},
    allowed: {type: Object, default: {}}
}, {collection: 'vehicle-models'});

model.set('toJSON', {
    getters: true,
    //virtuals: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    }
});

model.virtual('id').get(function () {
    return this._id;
});

module.exports = mongoose.model('VehicleModel', model);