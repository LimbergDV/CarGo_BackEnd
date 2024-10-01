// Import dependencies
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const sequelize = require("./config/connection.js");


// Start the server
app.listen(port, () => {
    console.log(`Express server running in http://localhost:${port}`);
  });