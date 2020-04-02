const axios = require("axios");

class OMDB {
  constructor(host, key) {
    this.host = host;
    this.key = key;
  }

  SearchTitle(query) {
    const url = `${this.host}/?apikey=${this.key}&s=${query}`;

    return axios.get(url);
  }

  GetTitleByID(id) {
    const url = `${this.host}/?apikey=${this.key}&i=${id}`;

    return axios.get(url);
  }
}

module.exports = OMDB;
