'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const addRoutes = require('./api/routes');
const logger = require('./lib/logger');


const PORT = process.env.PORT || '10020';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

addRoutes(app);
// app.get("/hello", function (req, res) {
//   return res.status(200).send({ hello: "world" });
// });

app.listen(PORT, function () {
  logger.always.log(`app listening on port ${PORT}`);
});

module.exports = app;