const express = require('express');
const connectDB = require('./db'); 
const app = express();
const routes = require('./routes'); 

app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
connectDB();

// Use routes
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
