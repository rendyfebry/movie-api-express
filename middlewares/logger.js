const Logs = require("../models/log");

const Logger = async (req, res, next) => {
  const { method, baseUrl, query } = req;
  const stringQuery = JSON.stringify(query);

  const logData = {
    time: Date.now(),
    method,
    endpoint: baseUrl,
    query: stringQuery
  };

  await Logs.create(logData);

  const log = `[${new Date().toLocaleString()}] ${method} ${baseUrl} ${stringQuery}`;
  console.log(log);

  next();
};

module.exports = Logger;
