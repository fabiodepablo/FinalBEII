const Ticket = require('../dao/models/ticket.model');

exports.createTicket = async (req, res) => {
    const { cartId, description } = req.body;
    try {
        const newTicket = await Ticket.create({ cartId, description });
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear ticket', error });
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('cartId');
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tickets', error });
    }
};
