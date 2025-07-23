const express = require("express");
const router = express.Router();
const { getEvents } = require("../API/ticketmaster");

router.get("/ticketmaster/:countryCode/:page/:size", async (req, res) => {
    const countryCode = req.params["countryCode"]
    const page = req.params["page"]
    const size = req.params["size"]
    const result = await getEvents(countryCode, page, size);
    console.log(result);
    res.send(result);
});

module.exports = router;
