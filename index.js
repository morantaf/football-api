const express = require("express");
const app = express();
const db = require("./db");

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("App running on port:", port));
