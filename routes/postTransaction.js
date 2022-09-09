const express = require('express');
const router = express.Router();
const transactions = require('../transactions');

const inOut = require('../calc');



// Post a transaction
router.post('/api/post-transactions', (req, res) => {
    const newTransaction = {
        description: req.body.description,
        value: req.body.value,
        type: req.body.type
    }
    transactions.push(newTransaction);

    console.log();
    console.log('Successfully added');
    console.log();


    function getInputValues() {

        // Get by type
        const filter = transactions.filter((transaction) => {
            return transaction.type === 'Entrada';
        });

        // Filter by value
        const values = filter.map((x) => {
            return parseInt(x.value);
        });

        // Sum array
        let sum = 0;

        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        inOut.inputs = sum;
    }
    getInputValues();

    function getOutputValues() {
        // Get by type
        const filter = transactions.filter((transaction) => {
            return transaction.type === 'Saída';
        });

        // Filter by value
        const values = filter.map((x) => {
            return parseInt(x.value);
        });

        // Sum array
        let sum = 0;

        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        inOut.outputs = sum;
    }
    getOutputValues();


    // Set total value
    inOut.total = inOut.inputs - inOut.outputs;



    console.log(`Entradas = R$${inOut.inputs}`);
    console.log(`Saídas = R$${inOut.outputs}`);
    console.log(`Total = R$${inOut.total}`);
    return;
})


module.exports = router;