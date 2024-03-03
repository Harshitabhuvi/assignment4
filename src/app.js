// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(authorRoutes);
app.use(blogRoutes);

mongoose.connect('mongodb://localhost:27017/backend-blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on port ${PORT}');
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
