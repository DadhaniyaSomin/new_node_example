const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { fsPromises, path, fs } = require('./coreModules.js');
const { logEvents, logger } = require('./log/logEvents.js');
const errorHandaler = require('../middleware/errorHandaler.js');
app.use(logger);
// corss origin netwrok sharing
app.use(cors());

//build in middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('asd');
});

app.use(errorHandaler);
app.listen(PORT, () => {
  'Server is runnig on 3000';
});
