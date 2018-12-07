var log = require('logger')('model-vehicle-models');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var validators = require('validators');
var model = require('model');

var types = validators.types;

var vmodel = Schema({
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
        validator: types.ref(),
        searchable: true
    }
}, {collection: 'vehicle-models'});

vmodel.plugin(mongins());
vmodel.plugin(mongins.user);
vmodel.plugin(mongins.createdAt());
vmodel.plugin(mongins.updatedAt());

model.ensureIndexes(vmodel, [
  {createdAt: -1, _id: -1}
]);

module.exports = mongoose.model('vehicle-models', vmodel);