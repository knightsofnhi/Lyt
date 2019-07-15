<<<<<<< HEAD
module.exports = function (app) {
  app.get("/api/artists", function (req, res) {

    var dbQuery = ("SELECT * FROM artists WHERE ?", {
      artistLocation: "Allston"
=======
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/artists", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Artist.findAll({}).then(function(dbArtist) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbArtist);
    });
  });

  // POST route for saving a new todo
  app.post("/api/artists", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Artist.create({
      artistName: req.body.artistName,
      artistMembers: req.body.artistMembers,
      complete: req.body.complete
    }).then(function(dbArtist) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbArtist);
>>>>>>> master
    });

<<<<<<< HEAD
    connection.query(dbQuery, function (err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
    })
  })
}
=======
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/artists/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Artist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/artists", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Artist.update({
      artistName: req.body.artistName,
      artistMembers: req.body.artistMembers,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

};
>>>>>>> master
