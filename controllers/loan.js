const Loan = require("../models/Loan");
const User = require("../models/user");
const Book = require("../models/Book");

module.exports = {
  async create(req, res) {
    try {
      const loan = await Loan.create(req.body);
      res.status(201).json(loan);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const loans = await Loan.findAll({ include: [User, Book] });
      res.status(200).json(loans);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getOne(req, res) {
    try {
      const loan = await Loan.findByPk(req.params.id, { include: [User, Book] });
      if (!loan) return res.status(404).json({ error: 'Loan not found' });
      res.status(200).json(loan);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const loan = await Loan.findByPk(req.params.id);
      if (!loan) return res.status(404).json({ error: 'Loan not found' });
      await loan.update(req.body);
      res.status(200).json(loan);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const loan = await Loan.findByPk(req.params.id);
      if (!loan) return res.status(404).json({ error: 'Loan not found' });
      await loan.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
