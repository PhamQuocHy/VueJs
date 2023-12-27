const express = require('express');

const featuresCtrl = require('./controllers/features.controller');

const router = express.Router();

router.use('/features', featuresCtrl);

module.exports = router;