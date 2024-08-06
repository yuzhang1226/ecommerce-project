const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Get all categories
router.get('/', async (req, res) => {
    try {
        // Fetch all categories from the database
        const categories = await Category.find();
        res.json(categories);  // Send categories as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle errors
    }
});

module.exports = router;
