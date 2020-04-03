const Sequelize = require("sequelize");
const sequelize = require("../data-access/mysql");

const Logs = sequelize.define("logs", {
  time: Sequelize.DATE,
  method: Sequelize.STRING,
  endpoint: Sequelize.STRING,
  query: Sequelize.STRING,
  timestamps: true
});

module.exports = Logs;
