/* const { Model, STRING, DATEONLY, TIME, DOUBLE } = require("sequelize");
const sequelize = require("../config/sequelize");

class Events extends Model {}

Events.init(
    {
        eventId: {
            type: STRING,
            allowNull: false,
        },
        title: {
            type: STRING,
            allowNull: false,
        },
        description: {
            type: STRING,
            allowNull: true
        },
        category: {
            type: STRING,
            allowNull: false,
        },
        startDay: {
            type: DATEONLY,
            allowNull: true,
        },
        startTime: {
            type: TIME,
        },
        latitude: {
            type: DOUBLE,
            allowNull: false,
        },
        longitude: {
            type: DOUBLE,
            allowNull: false,
        },
        place: {
            type: STRING,
            allowNull: true
        },
        address: {
            type: STRING,
            allowNull: true
        }
    },
    { sequelize }
);

module.exports = Events
 */
