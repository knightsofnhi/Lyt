'use strict';
module.exports = function (app) {
    var band = require('../controllers/BandController');
    app.get("/", function (req, res) {
        res.sendFile("index.html")
    })
    // Band Routes
    app.route('/bands')
        .get(band.list_all_bands)
        .post(band.create_a_band);


    app.route('/bands/:bandId')
        .get(band.read_a_band)
        .put(band.update_a_band)
        .delete(band.delete_a_band);
};