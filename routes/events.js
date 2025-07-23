const express = require("express");
const router = express.Router();
const { getEvents } = require("../API/ticketmaster");
const { getEventsByPosition, getEventsPalermo } = require("../API/predictHQ");

router.get("/ticketmaster/all/:countryCode/:page/:size", async (req, res) => {
    const countryCode = req.params["countryCode"];
    const page = req.params["page"];
    const size = req.params["size"];
    const result = await getEvents(countryCode, page, size);
    console.log(result);
    res.json(result);
});

router.get("/predicthq/all/:range/:lat/:long/:country/:limit/:category/:date", async (req, res) => {
    const range = req.params["range"];
    const lat = req.params["lat"];
    const long = req.params["long"];
    const country = req.params["country"];
    const limit = req.params["limit"];
    const category = req.params["category"];
    const date = req.params["date"];

    const result = await getEventsByPosition(range, lat, long, country, limit, category, date);
    console.log(result);

    res.json(result);
});

router.get("/predicthq/palermo", async (req, res) => {
    const result = await getEventsPalermo();
    res.json(result);
});

router.get("/all", async (req, res) => {
    var tm = await getEvents("IT", 0, 100);
    var phq = await getEventsPalermo();

    tm = tm["_embedded"].events;
    phq = phq.results;

    res.json({ tm, phq });
});

module.exports = router;
