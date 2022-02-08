const express = require("express");

const { getBugs, createBug, updateBug, deleteBug } = require("./bugController");

const router = express.Router();

router.route("/").get(getBugs).post(createBug);
router.route("/:id").patch(updateBug).delete(deleteBug);

module.exports = router;