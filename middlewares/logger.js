const Logs = require("../models/log");

function Logger(req, res, next) {
  const { method, baseUrl, query } = req;
  const stringQuery = JSON.stringify(query);

  const logData = {
    time: Date.now(),
    method,
    endpoint: baseUrl,
    query: stringQuery
  };

  Logs.create(logData);

  const log = `[${new Date().toLocaleString()}] ${method} ${baseUrl} ${stringQuery}`;
  console.log(log);

  next();
}

module.exports = Logger;
