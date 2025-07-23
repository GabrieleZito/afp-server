const { default: axios } = require("axios");

exports.getEvents = async (countryCode, page, size) => {
    const query = `https://app.ticketmaster.com/discovery/v2/events?countryCode=${countryCode}&locale=*&page=${page}&size=${size}&city=Palermo&apikey=${process.env.TICKETMASTER_API}`;
    return axios.get(query).then((res) => res.data);
};
