const dFns = require('date-fns');
const { v4: uuid } = require('uuid');
const { fsPromises, path, fs } = require('../coreModules.js');
console.log('asdasd');
const logEvents = async (message, fileName = null) => {
  const dateTime = `${dFns.format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  console.log(dateTime);
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'log', 'logs'))) {
      console.log('in IF');
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    await fsPromises.appendFile(
      path.join(
        __dirname,
        'logs',
        fileName !== null
          ? fileName
          : `${dFns.format(new Date(), `yyyyMMdd`)}.txt`
      ),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.header.origin}\t${req.url}`, 'reqLog.txt');
  next();
};
module.exports = { logEvents, logger };
