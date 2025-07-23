const { default: axios } = require("axios");

exports.getEventsByPosition = async (range, lat, long, country, limit, category, date) => {
    //lat 38.11 long 13.37
    const query = `https://api.predicthq.com/v1/events?within=${range}km%40${lat}%2C${long}&country=${country}&limit=${limit}&start.gte=${date}`;
    return axios.get(query, { headers: { Authorization: `Bearer ${process.env.PREDICTHQ_API}` } }).then((res) => res.data);
};

exports.getEventsPalermo = async () => {
    const categories = "conferences%2Cexpos%2Cconcerts%2Cfestivals%2Cperforming-arts%2Csports%2Ccommunity";
    const limit = 100;
    const query = `https://api.predicthq.com/v1/events?country=IT&place.scope=PMO&category=${categories}&limit=${limit}`;
    return axios.get(query, { headers: { Authorization: `Bearer ${process.env.PREDICTHQ_API}` } }).then((res) => res.data);
};