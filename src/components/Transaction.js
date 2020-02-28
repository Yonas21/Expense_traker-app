import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import '../App.css'

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li
      className={
        transaction.amount < 0
          ? "expense shadow-sm p-3 mb-5 bg-light rounded"
          : "income shadow-sm p-3 mb-5 bg-light rounded"
      }
    >
      <button
        className="btn_delete"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
      <span id="items">{transaction.item} </span>
      <span id="price">
        {sign}${Math.abs(transaction.amount)}
      </span>{" "}
    </li>
  );
};
