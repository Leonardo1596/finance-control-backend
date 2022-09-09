const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

const routerHomepage = require('./routes/homepage');
const routerGetTransactions = require('./routes/getTransactions');
const routerPostTransaction = require('./routes/postTransaction');
const routerClearTransactions = require('./routes/clearTransactions');
const routerGetTransactionsValues = require('./routes/getValues');


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(routerHomepage);
app.use(routerGetTransactions);
app.use(routerPostTransaction);
app.use(routerClearTransactions);
app.use(routerGetTransactionsValues);


// Server configuration
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});