const express = require("express");
const router = express.Router();
const { getEvents } = require("../API/ticketmaster");
const { getEventsByPosition, getEventsPalermo } = require("../API/predictHQ");
const fs = require("fs");

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

    phq = phq.map((e) => {
        const [date, time] = e.start_local.split("T");
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
            postalCode: e.geo.address.postCode,
        };
    });

    res.json(phq);
});

//CREATE EVENT
router.post("/newEvent/:eventId/:creator", async (req, res) => {
    const eventId = req.params["eventId"];
    const creator = req.params["creator"];
    const event = req.body;
    let rawdata = fs.readFileSync(__dirname + "/../database/events.json");
    let events = JSON.parse(rawdata);
    events[`${eventId}-${creator}`] = {
        id: "adwawd",
        nome: "adwwdad",
        titolo: "awddwadfaf",
        users: [{ username: creator, participate: true }],
    };
    const data = JSON.stringify(events);
    fs.writeFileSync(__dirname + "/../database/events.json", data);
    console.log(events);
    res.json(events);
});

//JOIN EVENT
router.get("/:eventId/:inviter/:invited/:participate", async (req, res) => {
    const eventId = req.params["eventId"];
    const inviter = req.params["inviter"];
    const invited = req.params["invited"];
    const participate = req.params["participate"];

    const invitecode = `${eventId}-${inviter}`;
    let rawdata = fs.readFileSync(__dirname + "/../database/events.json");
    let events = JSON.parse(rawdata);
    if (events[invitecode]) {
        events[invitecode].users.push({ username: invited, participate: participate });
        const data = JSON.stringify(events);
        fs.writeFileSync(__dirname + "/../database/events.json", data);
        res.json(true);
    } else {
        res.json(false);
    }
});

//SEARCH EVENT
//router.get("/")

module.exports = router;
