const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers); // Obtener todos los usuarios
router.post('/', userController.createUser); // Crear un nuevo usuario
router.delete('/:id', userController.deleteUser); // Eliminar un usuario por ID

module.exports = router;
