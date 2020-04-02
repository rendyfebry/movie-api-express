const express = require("express");
const Movie = require("../controllers/movie");

const router = express.Router();

router.get("/:movieID", Movie.getDetail);

module.exports = router;
