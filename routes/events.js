const express = require("express");
const router = express.Router();
const { getEvents } = require("../API/ticketmaster");

router.get("/ticketmaster", async (req, res) => {
    const result = await getEvents(0);
    console.log(result);
    res.send(result);
});

module.exports = router;
