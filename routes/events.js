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
    //var tm = await getEvents("IT", 0, 100);
    var phq = await getEventsPalermo();

    //tm = tm["_embedded"].events;
    phq = phq.results;

    /* tm = tm.map(e => {
        //console.log(e._embedded.venues[0])
        return {
            title: e.name,
            url: e.url,
            id: e.id,
            description: "",
            images: e.images,
            startDate: e.dates.start.localDate,
            startTime: e.dates.start.localTime,
            place: e._embedded.venues[0].name,
            postalCode: e._embedded.venues[0].postalCode,
            category: e.classifications[0].segment.name
        }
    }) */

    phq = phq.map(e => {
        const [date, time] = e.start_local.split('T');
        return {
            id: e.id,
            title: e.title,
            description: e.description,
            category: e.category,
            startDate: date,
            startTime: time,
            latitude: e.location[1],
            longitude: e.location[0],
            place: e.entities[0]?.name,
            address: e.geo.address.formatted_address,
            postalCode: e.geo.address.postCode
        }
    })


    res.json(phq);
});

module.exports = router;
