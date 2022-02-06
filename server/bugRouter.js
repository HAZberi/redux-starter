const express = require("express");

const { getBugs } = require("./bugController");

const router = express.Router();

router.route("/").get(getBugs);

module.exports = router;