const { default: axios } = require("axios");

exports.getEventsByPosition = async (range, lat, long, country, limit, category, date) => {
    //lat 38.11 long 13.37
    const query = `https://api.predicthq.com/v1/events?within=${range}km%40${lat}%2C${long}&country=${country}&limit=${limit}&category=${category}&start.gte=${date}`
    return axios.get(query, {headers: {"Authorization": `Bearer ${process.env.PREDICTHQ_API}`}}).then(res => res.data)
}

