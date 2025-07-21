const { Model, STRING, DATEONLY, TIME } = require("sequelize");
const sequelize = require("../config/sequelize");

class Events extends Model {}

Events.init(
    {
        name: {
            type: STRING,
            allowNull: false,
        },
        ticketMasterId: {
            type: STRING,
            allowNull: true,
        },
        urlTicketMaster: {
            type: STRING,
        },
        image1: {
            type: STRING,
            allowNull: true,
        },
        image2: {
            type: STRING,
            allowNull: true,
        },
        image3: {
            type: STRING,
            allowNull: true,
        },
        startDay: {
            type: DATEONLY,
            allowNull: true,
        },
        startTime: {
            type: TIME,
        },
    },
    { sequelize }
);

module.exports = Events
