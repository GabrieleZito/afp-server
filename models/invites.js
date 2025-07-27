/* const { Model, STRING, DATEONLY, TIME, INTEGER, ENUM } = require("sequelize");
const sequelize = require("../config/sequelize");
const UserProfile = require("./userProfile");
const { Events } = require("pg");

class Invites extends Model {}

Invites.init(
    {
        invitedUserId: {
            type: INTEGER,
            allowNull: false,
            references: {
                model: UserProfile,
                key: "id",
            },
        },
        inviterUserId: {
            type: INTEGER,
            allowNull: false,
            references: {
                model: UserProfile,
                key: "id",
            },
        },
        eventId: {
            type: INTEGER,
            allowNull: false,
            references: {
                model: Events,
                key: "id",
            },
        },
        status: {
            type: ENUM("pending", "confirmed", "declined"),
            defaultValue: "pending",
        },
    },
    { sequelize }
);

module.exports = Invites;
 */