const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

router.get('/', ticketController.getTickets); // Obtener todos los tickets

module.exports = router;
