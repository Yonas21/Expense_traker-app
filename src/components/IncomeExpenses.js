import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import {translate } from '../i18n/translate';
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item ) => (acc+=item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item ) => (acc+=item), 0) * -1).toFixed(2);
  return (
    <div className="inc_exp_container shadow-sm p-3 mb-5 bg-light rounded">
      <div className="left">
        <h4>{translate("income")}</h4>
        <p id="money_plus" className="plus">
          {numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>{translate("expense")}</h4>
        <p id="money_minus" className="minus">
          {numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};
