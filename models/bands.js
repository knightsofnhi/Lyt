// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Artist" model that matches up with DB
var Artist = sequelize.define("artist", {
    artistName: Sequelize.STRING,
    artistMembers: Sequelize.STRING,
    artistLocation: Sequelize.STRING,
    artistContactName: Sequelize.STRING,
    artistContactPhone: Sequelize.INT,
    artistContactEmail: Sequelize.STRING,

});

// Syncs with DB
Artist.sync();

// Makes the Artist Model available for other files (will also create a table)
module.exports = Artist;

