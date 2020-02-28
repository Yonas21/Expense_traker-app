// @desc get all transactions
// @route GET /api/transactions
// @acess Public

const mongoose = require("mongoose");
const Transaction = require("../models/transactionSchema");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: `unable to find any data.`,
      error: `${err}`
    });
  }
 };

// @desc add  a transaction
// @route POST /api/transactions
// @acess Public
exports.addTransaction = async (req, res) => {
  
  try {
    const { item, amount } = req.body;

    // add items to transactions
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    const messages = Object.values(error.errors).map(value => value.message)
    return res.status(500).json({
      message: 'unable to store data',
      error: messages
    });
  }
};

// @desc delete  a transaction
// @route DELETE /api/transactions/:id
// @acess Public
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      res.status(404).json({
        message: 'no transaction found',
        success: false
      });
    } else {
      await transaction.remove();

      res.status(200).json({
        success:true,
        data: {}
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
