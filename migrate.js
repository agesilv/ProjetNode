require('dotenv').config();
const connection = require("./models/db");
require("./models/user");
require("./models/Book");
require("./models/Category");
require("./models/Loan");

connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());
