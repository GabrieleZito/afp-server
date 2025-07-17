const { Model, STRING } = require("sequelize");
const sequelize = require("../config/sequelize");

class UserProfile extends Model {}

UserProfile.init(
    {
        firstName: {
            type: STRING,
            allowNull: false,
        },
        lastName: {
            type: STRING,
            allowNull: false,
        },
        propic: {
            type: STRING,
            defaultValue: "https://cdn-icons-png.flaticon.com/512/1177/1177568.png",
        },
        email: {
            type: STRING,
            allowNull: false,
        },
        username: {
            type: STRING,
            allowNull: false,
        },
        passwordHash: {
            type: STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = UserProfile;
