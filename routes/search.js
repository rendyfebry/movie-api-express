const express = require("express");
const MovieController = require("../controllers/movie");

const router = express.Router();
const movieCtrl = new MovieController();

router.get("/", (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery || searchQuery == "") {
    return res.status(400).json({
      message: "Please input q params: http://localhost:3000/search?q=Batman"
    });
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

      return res.status(errStatus).json({
        message: errMsg
      });
    });
});

module.exports = router;
