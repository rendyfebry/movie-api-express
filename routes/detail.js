const express = require("express");
const MovieController = require("../controllers/movie");

const router = express.Router();
const movieCtrl = new MovieController();

router.get("/:movieID", (req, res) => {
  console.log(req.params);

  return movieCtrl
    .getDetail(req.params.movieID)
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
