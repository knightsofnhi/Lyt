module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
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
