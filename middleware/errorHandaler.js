const { logEvents, logger } = require('../log/logs/logEvents.js');
const errorHandaler = (err, req, res, next) => {
  console.log(err.stack);
  logEvents(`${err.name}\t${err.message}`, 'errorLog.txt');
  res.status(500).send(err.message);
};

module.exports = errorHandaler;
