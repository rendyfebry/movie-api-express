const OMDB = require("../data-access/omdb");

const omdbHost = process.env.OMDB_HOST;
const omdbKey = process.env.OMDB_KEY;

class MovieController {
  constructor() {
    this.omdbAPI = new OMDB(omdbHost, omdbKey);
  }

  search(searchQuery) {
    return this.omdbAPI.SearchTitle(searchQuery);
  }

  getDetail(movieID) {
    return this.omdbAPI.GetTitleByID(movieID);
  }
}

module.exports = MovieController;
