const express = require("express");
const { getUserById, getUserByUsername } = require("../database/users");
const router = express.Router();

router.post("/new", async (req, res) => {
    const user = req.body;
});

router.get("/id/:id", async (req, res) => {
    const id = req.params["id"];
    const user = await getUserById(id);
    res.json(user);
});

router.get("/username/:username", async (req, res) => {
    const username = req.params["username"];
    const user = await getUserByUsername(username);
    res.json(user);
});

module.exports = router;
