const express = require("express");
const app = express();
const teamRouter = require("./team/router");

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("App running on port:", port));

app.use(teamRouter);
