const express = require("express");
const { getUserById, getUserByUsername, createUser } = require("../database/users");
const router = express.Router();

router.get("/new/:username", async (req, res) => {
    const username = req.params["username"];
    const user = await createUser(username);
    res.json(user);
});

router.get("/id/:id", async (req, res) => {
    const id = req.params["id"];
    const user = await getUserById(id);
    res.json(user);
});

router.get("/username/:username", async (req, res) => {
    const username = req.params["username"];
    const user = await getUserByUsername(username);
    console.log(user);
    res.json(user);
});

module.exports = router;
