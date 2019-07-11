module.exports = function(sequelize, DataTypes) {
  const Artists = sequelize.define("Artists", {
    artistName: DataTypes.STRING,
    artistMembers: DataTypes.STRING,
    artistLocation: DataTypes.STRING,
    artistContactName: DataTypes.STRING,
    artistContactPhone: DataTypes.STRING,
    artistContactEmail: DataTypes.STRING
  });
  return Artists;
};

// module.exports = function(sequelize, DataTypes) {
//   const Artists = sequelize.define("Artists", {
//     artistName: DataTypes.STRING,
