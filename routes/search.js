const express = require("express");
const MovieController = require("../controllers/movie");
const LoggerMiddleware = require("../middlewares/logger");
const { SendError } = require("../controllers/utils");

const router = express.Router();
const movieCtrl = new MovieController();

router.get("/", LoggerMiddleware, (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery || searchQuery == "") {
    return SendError(res, 400, "Please input q params");
  }

  movieCtrl
    .search(searchQuery)
    .then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      const { response, message } = err;
      const errStatus = response && response.status ? response.status : 500;
      const errMsg = message || "Unable to fetch movie detail";

      return SendError(res, errStatus, errMsg);
    });
});

module.exports = router;
