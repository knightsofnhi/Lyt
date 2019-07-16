module.exports = function (sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    artistName: DataTypes.STRING,
    bandName: DataTypes.STRING,
    bandLocation: DataTypes.STRING,
    bandGenre: DataTypes.STRING,
    bandMembers: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    musicLink: DataTypes.STRING,
    contactName: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    email: DataTypes.STRING
  }
  );
  return Artist;
};

// module.exports = function(sequelize, DataTypes) {
//   const Lyt = sequelize.define("Lyt", {
//     // Giving the Artists model a name of type STRING
//     artistName: DataTypes.STRING,
//     artistMembers: DataTypes.STRING,
//     artistLocation: DataTypes.STRING,
//     artistContactName: DataTypes.STRING,
//     artistContactPhone: DataTypes.STRING,
//     artistContactEmail: DataTypes.STRING
//   });
//   return Lyt;
// };
