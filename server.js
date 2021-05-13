const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/config')
const jwt = require('./utilities/jwt');
const errorHandler = require('./utilities/error-handler');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt()); // This wil utilize the Token authentication 
// api routes
app.use('/users', require('./api/users/userController'));
app.use('/expense', require('./api/expense/expenseController'));


app.get('/', (req, res) => {
    res.send('this is Book Folder Routes')
})


// global error handler
app.use(errorHandler);

app.listen(config.port, () => {
    console.log("Server is listening on ", config.port)
});

