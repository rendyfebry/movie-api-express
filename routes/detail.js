const express = require("express");
const axios = require("axios");

const router = express.Router();

const omdbHost = process.env.OMDB_HOST;
const omdbKey = process.env.OMDB_KEY;

router.get("/:movieID", (req, res) => {
  console.log(req.params);

  const url = `${omdbHost}/?apikey=${omdbKey}&i=${req.params.movieID}`;

  return axios
    .get(url)
    .then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      const { response, message } = err;
      const errStatus = response && response.status ? response.status : 500;
      const errMsg = message || "Unable to fetch movie detail";

      return res.status(errStatus).json({
        message: errMsg
      });
    });
});

module.exports = router;
