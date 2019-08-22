module.exports = function(sequelize, DataTypes) {
  let ratings = sequelize.define("ratings", {
    // Giving the Product model a name of type STRING
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    },
    music: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Music",
        key: "id"
      }
    },
    ratings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 5,
        min: 0,
        isNumeric: true
      }
    }
  });

  return ratings;
};
