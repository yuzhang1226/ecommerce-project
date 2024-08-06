// backend/routes/admin.js
const express = require('express');
const router = express.Router();

// Hard-coded admin credentials
const adminCredentials = {
    username: 'admin',
    password: 'password'
};

router.post('/admin/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        res.json({ isAdmin: true });
    } else {
        res.status(401).json({ isAdmin: false });
    }
});

module.exports = router;
