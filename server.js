const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const omdbHost = process.env.OMDB_HOST;
const omdbKey = process.env.OMDB_KEY;

app.get("/search", (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery || searchQuery == "") {
    return res.status(400).json({
      message: "Please input q params: http://localhost:3000/search?q=Batman"
    });
  }

  const url = `${omdbHost}/?apikey=${omdbKey}&s=${searchQuery}`;

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

app.get("/detail/:movieID", (req, res) => {
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

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    message: "Not Found!"
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
