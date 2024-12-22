const Book = require("../models/Book");
const Category = require("../models/Category");

module.exports = {
  async create(req, res) {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const books = await Book.findAll({ include: Category });
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getOne(req, res) {
    try {
      const book = await Book.findByPk(req.params.id, { include: Category });
      if (!book) return res.status(404).json({ error: 'Book not found' });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(404).json({ error: 'Book not found' });
      await book.update(req.body);
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);
      if (!book) return res.status(404).json({ error: 'Book not found' });
      await book.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
