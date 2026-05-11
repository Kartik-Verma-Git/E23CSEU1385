const axios = require("axios");
require("dotenv").config();

const fetchDepots = async (token) => {

    try {

        const response = await axios.get(
            `${process.env.BASE_URL}/depots`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data.depots;

    } catch (error) {

        console.log("DEPOTS API ERROR");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        throw error;
    }
};

const fetchVehicles = async (token) => {

    try {

        const response = await axios.get(
            `${process.env.BASE_URL}/vehicles`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data.vehicles;

    } catch (error) {

        console.log("VEHICLES API ERROR");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        throw error;
    }
};

module.exports = {
    fetchDepots,
    fetchVehicles
};