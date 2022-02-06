const fs = require("fs");
const bugs = require("./data/bugs.json");

exports.getBugs = (req, res) => {
  res.status(200).json(bugs);
};
