var db = require("../models");

module.exports = function(app) {
  app.get("/api/Lyt", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Lyt.findAll({
      include: [db.Post]
    }).then(function(dbLyt) {
      res.json(dbLyt);
    });
  });

  app.get("/api/Lyt/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Lyt.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbLyt) {
      res.json(dbLyt);
    });
  });

  app.post("/api/Lyt", function(req, res) {
    db.Lyt.create(req.body).then(function(dbLyt) {
      res.json(dbLyt);
    });
  });

  app.delete("/api/Lyt/:id", function(req, res) {
    db.Lyt.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbLyt) {
      res.json(dbLyt);
    });
  });

};
