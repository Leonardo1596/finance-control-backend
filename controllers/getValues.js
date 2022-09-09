const transactions = require('../transactions');


function getValues() {
    let inputs;
    let outputs;

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
        inputs = sum;
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
        outputs = sum;
    }
    getOutputValues();


    // Set total value
    let total = inputs - outputs;
    
    console.log(`Entradas = ${inputs}`);
    console.log(`Saídas = ${outputs}`);
    // console.log(`Total = ${total}`);

    return inputs;
}


module.exports = getValues();


