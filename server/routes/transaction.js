const express = require('express');
const router = express.Router();

//import controllers

// const transactionController = require('../controllers/transaction');
const { getTransactions ,addTransaction, deleteTransaction} = require('../controllers/transaction'); // array destructuring method

router.route('/').get(getTransactions).post(addTransaction);
router.route('/:id').delete(deleteTransaction);

module.exports = router;