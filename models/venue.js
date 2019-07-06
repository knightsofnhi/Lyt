module.exports = function (sequelize, DataTypes) {
    const Venue = sequelize.define("Venue", {
        venueName: DataTypes.STRING,
        venueLocaton: DataTypes.STRING,
        venueManager: DataTypes.DOUBLE,
        venuePhone: DataTypes.STRING,
        venueEmail: DataTypes.STRING,
    }
    {
        const Artist = sequelize.define("Artist", {
        artistName: DataTypes.STRING,
        artistLocaton: DataTypes.STRING,
        artistMembers: DataTypes.STRING,
        artistManager: DataTypes.DOUBLE,
        artistPhone: DataTypes.STRING,
        artistEmail: DataTypes.STRING,
        })
    }
    );

    return Venue;
    return Artist;
}