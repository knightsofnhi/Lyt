'use strict';


var mongoose = require('mongoose'),
    Band = mongoose.model('Bands');

exports.list_all_bands = function (req, res) {
    Band.find({}, function (err, band) {
        if (err)
            res.send(err);
        res.json(band);
    });
};

exports.create_a_band = function (req, res) {
    var new_band = new Band(req.body);
    new_band.save(function (err, band) {
        if (err)
            res.send(err);
        res.json(band);
    });
};


exports.read_a_band = function (req, res) {
    Band.findById(req.params.bandId, function (err, band) {
        if (err)
            res.send(err);
        res.json(band);
    });
};


exports.update_a_band = function (req, res) {
    Band.findOneAndUpdate({ _id: req.params.bandId }, req.body, { new: true }, function (err, band) {
        if (err)
            res.send(err);
        res.json(band);
    });
};


exports.delete_a_band = function (req, res) {


    Band.remove({
        _id: req.params.bandId
    }, function (err, band) {
        if (err)
            res.send(err);
        res.json({ message: 'Band successfully deleted' });
    });
};