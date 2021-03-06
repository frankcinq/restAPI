const express = require("express");
const cors = require("cors");

const app = express();

const menu = require("./routes/menu");

app.use("/menu", menu);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

module.exports = app;
