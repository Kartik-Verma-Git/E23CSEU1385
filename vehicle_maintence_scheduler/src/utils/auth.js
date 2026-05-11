const axios = require("axios");
// require("dotenv").config();

const getAccessToken = async () => {

    try {

        const authURL = `${process.env.BASE_URL}/auth`;

        console.log("AUTH URL:", authURL);

        const response = await axios.post(
            authURL,
            {
                email: process.env.EMAIL,
                name: process.env.NAME,
                rollNo: process.env.ROLL_NO,
                accessCode: process.env.ACCESS_CODE,
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Authentication Successful");

        const token =
            response.data.access_token ||
            response.data.token ||
            response.data.accessToken;

        console.log("TOKEN GENERATED");

        return token;

    } catch (error) {

        console.log("AUTH ERROR:");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        process.exit(1);
    }
};

module.exports = getAccessToken;