// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/menuhaus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(cors()); // Use cors middleware

// Routes
app.use('/api', menuRoutes); // Prefix all menu routes with '/api'

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
