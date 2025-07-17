const Interests = require("./interests");
const UserProfile = require("./userProfile");

UserProfile.belongsToMany(Interests, {
    through: "UserInterests",
    foreignKey: "user_id",
});

Interests.belongsToMany(UserProfile, {
    through: "UserInterests",
    foreignKey: "interest_id",
});

module.exports = {
    UserProfile,
    Interests,
};
