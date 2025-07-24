const Events = require("./events");
const Interests = require("./interests");
const Invites = require("./invites");
const UserProfile = require("./userProfile");

/* UserProfile.belongsToMany(Interests, {
    through: "UserInterests",
    foreignKey: "user_id",
});

Interests.belongsToMany(UserProfile, {
    through: "UserInterests",
    foreignKey: "interest_id",
}); */

UserProfile.hasMany(Invites, { foreignKey: "inviterUserId", as: "sentInvites" });
UserProfile.hasMany(Invites, { foreignKey: "invitedUserId", as: "receivedInvites" });

Invites.belongsTo(UserProfile, { foreignKey: "inviterUserId", as: "inviter" });
Invites.belongsTo(UserProfile, { foreignKey: "invitedUserId", as: "invited" });

Events.hasMany(Invites, {
    foreignKey: "eventId",
    as: "invitations",
});
Invites.belongsTo(Events, {
    foreignKey: "eventId",
    as: "event",
});

// Many-to-many through Invitation for Users and Events
UserProfile.belongsToMany(Events, {
    through: Invites,
    foreignKey: "invitedUserId",
    otherKey: "eventId",
    as: "invitedEvents",
});

Events.belongsToMany(UserProfile, {
    through: Invites,
    foreignKey: "eventId",
    otherKey: "invitedUserId",
    as: "invitedUsers",
});

module.exports = {
    UserProfile,
    Interests,
    Events,
};
