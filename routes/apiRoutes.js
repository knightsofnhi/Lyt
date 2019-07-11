var db = require("../models");

module.exports = function(app) {
  // Get all artists
  app.get("/api/artists", function(req, res) {
    db.Artists.findAll({}).then(function(dbArtists) {
      res.json(dbArtists);
    });
  });

  // Create a new artists
  app.post("/api/artists", function(req, res) {
    db.Artists.create(req.body).then(function(dbArtists) {
      res.json(dbArtists);
    });
  });

  // Delete an artists by id
  app.delete("/api/artists/:id", function(req, res) {
    db.Artists.destroy({ where: { id: req.params.id } }).then(function(dbArtists) {
      res.json(dbArtists);
    });
  });
};
