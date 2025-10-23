const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products'); 

// GET routes
router.get('/', productsController.register);
router.get('/login', productsController.login);
router.get('/data', productsController.data);
router.get('/about', productsController.about);

// POST routes
router.post('/register', productsController.doRegister);
router.post('/login', productsController.doLogin);


module.exports = router;

