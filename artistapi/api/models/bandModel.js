'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArtistSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the your band'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Bands', ArtistSchema); 