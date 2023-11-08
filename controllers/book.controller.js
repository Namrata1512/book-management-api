const Book = require('../models/book.model');

// Controller for creating a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const newBook = new Book({ title, author, summary });
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for getting all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for getting a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for updating a book's details
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for deleting a book
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
