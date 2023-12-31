const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.get('/', urlController.getHomePage);
router.post('/generate', urlController.generateHash);
router.get('/:hash', urlController.redirectToOriginalRoute);


module.exports = router;
