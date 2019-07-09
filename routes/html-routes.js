// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/lyt.html"));
  });

  // lyt route loads lyt.html
  app.get("/lyt", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/lyt.html"));
  });

  // lyt route loads lyt.html
  app.get("/lyt", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/lyt.html"));
  });

  // artists route loads artist-signup.html
  app.get("/artists", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/artist-signup.html"));
  });

};
