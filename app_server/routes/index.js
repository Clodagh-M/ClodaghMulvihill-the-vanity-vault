const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 

/* GET home page. */
router.get('/', ctrlLocations.register);
router.get('/login', ctrlLocations.login);
router.get('/data', ctrlLocations.data);


module.exports = router;

