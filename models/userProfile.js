/* const { Model, STRING } = require("sequelize");
const sequelize = require("../config/sequelize");

class UserProfile extends Model {}

UserProfile.init(
    {
        firstName: {
            type: STRING,
            allowNull: true,
        },
        lastName: {
            type: STRING,
            allowNull: true,
        },
        propic: {
            type: STRING,
            defaultValue: "https://cdn-icons-png.flaticon.com/512/1177/1177568.png",
        },
        email: {
            type: STRING,
            allowNull: true,
        },
        username: {
            type: STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
    }
);

module.exports = UserProfile;
 */