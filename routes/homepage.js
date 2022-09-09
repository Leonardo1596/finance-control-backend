const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Homepage API');
});


module.exports = router;