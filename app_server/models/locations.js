/**
 * Created by kmjosephs on 3/8/16.
 */
var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, requires: true, min: 0, max:5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}
});

var openingTimeSchema = new mongoose.Schema({
    days:{type: String, requires:true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: {type: Number, "default":0},
    facilities: [String],
    coords: {type: [Number], index:'2dsphere'},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);