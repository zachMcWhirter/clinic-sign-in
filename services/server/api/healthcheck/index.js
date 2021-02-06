const express = require('express');
const controller = require('./healthcheck.controller');

const router = express.Router();

router.get('/', controller.helloWorld);

module.exports = router;