function Logger(req, res, next) {
  const { method, baseUrl, query } = req;
  const { statusCode } = res;
  const stringQuery = JSON.stringify(query);

  const log = `[${new Date().toLocaleString()}] ${method} ${baseUrl} ${stringQuery}`;
  console.log(log);

  next();
}

module.exports = Logger;
