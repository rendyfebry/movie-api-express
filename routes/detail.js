const express = require("express");
const MovieController = require("../controllers/movie");
const LoggerMiddleware = require("../middlewares/logger");
const { SendError } = require("../controllers/utils");

const router = express.Router();
const movieCtrl = new MovieController();

router.get("/:movieID", LoggerMiddleware, (req, res) => {
  if (req.params.movieID && req.params.movieID.length !== 9) {
    return SendError(res, 400, "Incorrect MovieID");
  }

  return movieCtrl
    .getDetail(req.params.movieID)
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
