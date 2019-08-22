module.exports = function(sequelize, DataTypes) {
  let users = sequelize.define("users", {
    // Giving the Product model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 255],
          isAlphanumeric: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1, 255],
          isAlphanumeric: true
      }
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  users.associate = function(models) {
    // Associating Users with Music
    // When an Users is deleted, also delete any associated Musics
    users.belongsToMany(models.music, {
      through: models.ratings
    });
  };

  return users;
};