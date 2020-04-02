const express = require("express");
const Movie = require("../controllers/movie");

const router = express.Router();

router.get("/", Movie.search);

module.exports = router;
