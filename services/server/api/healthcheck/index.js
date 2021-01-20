const express = require('express');
const controller = require('./healthcheck.controller');

const router = express.Router();

router.get('/extra', controller.helloWorld);

module.exports = router;