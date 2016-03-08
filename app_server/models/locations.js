/**
 * Created by kmjosephs on 3/8/16.
 */
var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: {type: Number, "default":0},
    facilities: [String]
});