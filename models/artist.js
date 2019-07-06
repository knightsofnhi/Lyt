module.exports = function (sequelize, DataTypes) {
   const Artist = sequelize.define("Artist", {
        artistName: DataTypes.STRING,
        artistLocaton: DataTypes.STRING,
        artistMembers: DataTypes.STRING,
        artistManager: DataTypes.DOUBLE,
        artistPhone: DataTypes.STRING,
        artistEmail: DataTypes.STRING,
        });

    return Venue;
}