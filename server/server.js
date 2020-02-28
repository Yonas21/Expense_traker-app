/* eslint-disable no-unused-vars */
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const path = require('path');


// import the instance of database connection
const connectDB = require('../config/db');

// create instance of the app
const app = express();

// config the directory
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();
//import routers
const transactionRouter = require('./routes/transaction');

// use middleware
app.use(morgan('dev'));
app.use(express.json()); // allows to use body-parser
app.use('/api/transactions', transactionRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => res.sendFile(__dirname, 'build','index.html'));
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on ${PORT}`.white.italic
  );
});
