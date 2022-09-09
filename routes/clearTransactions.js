const express = require('express');
const router = express.Router();
const transactions = require('../transactions');

router.post('/api/clear-transactions', (req, res) => {
    transactions.splice(0, transactions.length);

    console.log();
    console.log('Cleared transactions');
})

module.exports = router;