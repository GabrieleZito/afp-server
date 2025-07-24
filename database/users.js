const { UserProfile, Interests } = require("../models");

exports.prova = async () => {
    try {
        const prova = await Interests.create({ name: "AWDWD" });
    } catch (error) {
        print(error);
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await UserProfile.findByPk(id);
        return user;
    } catch (error) {
        throw error;
    }
};

exports.getUserByUsername = async (username) => {
    try {
        const user = await UserProfile.findOne({ where: { username: username } });
        return user;
    } catch (error) {
        throw error;
    }
};

exports.createUser = async (username) => {
    try {
        const user = await UserProfile.create({ username: username });
        return user;
    } catch (e) {
        throw e;
    }
};
