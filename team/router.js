const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(list => res.json(list))
    .catch(next);
});

router.post("/team", (req, res, next) => {
  console.log("post request body", req.body);
  Team.create(req.body)
    .then(team => {
      res.json(team);
    })
    .catch(next);
});

module.exports = router;
