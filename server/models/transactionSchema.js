const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    item: {
      type: String,
      trim: true,
      required: [true, "please add an item Name."]
    },
    amount: {
      type: Number,
      required: [
        true,
        "Please Add Either Positive or Negatie Number for Amount."
      ]
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "Transaction"
  }
);

module.exports = mongoose.model('Transaction', transactionSchema);
