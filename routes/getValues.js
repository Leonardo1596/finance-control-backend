const express = require('express');
const router = express.Router();
const inOut = require('../calc');


// Get transactions values
router.get('/api/transactions/values', (req, res) => {
    res.send(inOut);
});


module.exports = router;