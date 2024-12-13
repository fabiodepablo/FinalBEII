const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

router.post('/', cartController.createCart); // Crear un carrito
router.get('/', cartController.getCarts); // Listar todos los carritos

module.exports = router;
