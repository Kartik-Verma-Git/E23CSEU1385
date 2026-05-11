// require("dotenv").config();

// console.log("Starting server...");

// const app = require("./app");

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

console.log("BASE URL:", process.env.BASE_URL);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});