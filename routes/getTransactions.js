const express = require('express');
const router = express.Router();
const transactions = require('../transactions');

const inOut = require('../calc');




// Get transactions list
router.get('/api/transactions', (req, res) => {
    res.send(transactions);
    // res.send(inOut);
});

module.exports = router;