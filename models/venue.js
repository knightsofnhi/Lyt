module.exports = function (sequelize, DataTypes) {
    const Venue = sequelize.define("Venue", {
        venueName: DataTypes.STRING,
        venueLocaton: DataTypes.STRING,
        venueManager: DataTypes.DOUBLE,
        venuePhone: DataTypes.STRING,
        venueEmail: DataTypes.STRING,
    });

    return Venue;
}