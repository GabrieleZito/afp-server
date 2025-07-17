const { Model, STRING } = require("sequelize");
const sequelize = require("../config/sequelize");

class Interests extends Model {}

Interests.init(
    {
        name: {
            type: STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Interests;
