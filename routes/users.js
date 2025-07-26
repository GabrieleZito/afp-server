const express = require("express");
const { getUserById, getUserByUsername, createUser } = require("../database/users");
const router = express.Router();
const fs = require("fs");

/* router.post("/new/:username", async (req, res) => {
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
}); */

router.get("/getUser/:username", async (req, res) => {
    const username = req.params["username"];
    let rawdata = fs.readFileSync(__dirname + "/../database/users.json");
    let users = JSON.parse(rawdata);
    if (users.usernames.find((u) => u == username)) {
        res.json(true);
    } else {
        res.json(false);
    }
});

router.get("/newUser/:username", async (req, res) => {
    const username = req.params["username"];
    let rawdata = fs.readFileSync(__dirname + "/../database/users.json");
    let users = JSON.parse(rawdata);

    users.usernames.push(username);
    const data = JSON.stringify(users);
    fs.writeFileSync(__dirname + "/../database/users.json", data);
    res.json(true);
});

module.exports = router;
