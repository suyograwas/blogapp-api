const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
      console.log("Successfully connected to the DB");
    })
    .catch((err) => {
      console.log(" Error :", err.message);
      process.exit(1);
    });
};

module.exports = dbConnection;
