module.exports = function (sequelize, DataTypes) {
   const Artist = sequelize.define("Artist", {
        artistName: DataTypes.STRING,
        artistLocaton: DataTypes.STRING,
        artistMembers: DataTypes.STRING,
        artistContactName: DataTypes.DOUBLE,
        artistContactPhone: DataTypes.STRING,
        artistContactEmail: DataTypes.STRING,
        });

    return Lyt;
}