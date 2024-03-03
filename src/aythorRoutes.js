// src/routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// POST - Create a new author
router.post('/authors', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET - Get all authors
router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.send(authors);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;