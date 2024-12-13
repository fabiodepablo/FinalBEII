const Ticket = require('../models/ticket.model');

class TicketRepository {
    static async create(ticketData) {
        const ticket = new Ticket(ticketData);
        return await ticket.save();
    }

    static async getAll() {
        return await Ticket.find();
    }
}

module.exports = TicketRepository;
