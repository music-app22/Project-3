module.exports = function(sequelize, DataTypes) {
    let music = sequelize.define("music", {
          // Giving the Product model a name of type STRING
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
    
        // },
        artist: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [1, 255],
                isAlphanumeric: true
            }
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [1, 255],
                isAlphanumeric: true
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
        music.associate = function(models) {
          // Associating Users with Music
          // When an Users is deleted, also delete any associated Musics
          music.belongsToMany(models.users, {
            through: models.ratings
          });
        };
        return music;
};