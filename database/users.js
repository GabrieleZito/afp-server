const { UserProfile, Interests } = require("../models");

exports.prova = async () => {
    try {
        const prova = await Interests.create({ name: "AWDWD" });
    } catch (error) {
        print(error);
    }
};
