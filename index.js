const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BOOKAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const bookRoutes = require('./routes/book.route');


// Middleware
app.use(express.json());

// Routes
app.use('/', bookRoutes);