import React, { useState, useContext } from "react";

import "../App.css";
import { GlobalContext } from "../context/GlobalState";
import { translate } from "../i18n/translate";

export const AddTransaction = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      item,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  let name = 'add_an_item'
  console.log(translate(name))
  return (
    <>
      <h3>{translate("new_transaction")}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="item">{translate("add_an_item")}</label>
          <input
            type="text"
            value={item}
            onChange={event => setItem(event.target.value)}
            className="form-control"
            placeholder={translate("add_an_item")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item">{translate("amount")}</label>
          <input
            type="text"
            value={amount}
            onChange={event => setAmount(event.target.value)}
            className="form-control"
            placeholder={translate("amount")}
          />
        </div>
        <button type="submit" className="btn btn-success">
          {translate("add_transaction")}
        </button>
      </form>
    </>
  );
};
