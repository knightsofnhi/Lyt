module.exports = function(sequelize, DataTypes) {
  const Artist = sequelize.define("Artist", {
    text: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a Artist from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our Artist is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new Artists complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Artist;
};
