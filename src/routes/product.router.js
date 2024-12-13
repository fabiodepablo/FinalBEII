const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Rutas
router.get('/', productController.getProducts); // Obtener todos los productos
router.post('/', productController.createProduct); // Crear un nuevo producto
router.delete('/:id', productController.deleteProduct); // Eliminar un producto por ID

module.exports = router;
