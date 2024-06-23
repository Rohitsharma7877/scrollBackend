const express = require("express");
const bodyParser = require("body-parser");
const { connection } = require("./config/db");
const cors = require("cors");
const fs = require("fs");
const { scrollRouter } = require("./router/scroll");

const app = express();
app.use(express.json());
const dataFile = "data.json";
app.use(bodyParser.json());

require("dotenv").config();
app.use(
  cors({
    origin: "*",
  })
);

app.use("/scroll", scrollRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Mongodb connected");
  } catch (err) {
    console.log("trouble to connection db");
    console.log(err);
  }
  console.log("Running at 5000 Port");
});
