const { default: axios } = require("axios");

exports.getEvents = async (page) => {
    const query = `https://app.ticketmaster.com/discovery/v2/events?countryCode=IT&locale=*&page=${page}&size=20&apikey=${process.env.TICKETMASTER_API}`;
    return axios.get(query).then((res) => res.data);
};
