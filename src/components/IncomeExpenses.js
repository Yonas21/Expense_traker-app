import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import {translate } from '../i18n/translate';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item ) => (acc+=item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item ) => (acc+=item), 0) * -1).toFixed(2);
  return (
    <div className="inc_exp_container">
      <div>
        <h4>{translate("income")}</h4>
        <p id="money_plus" className="plus">
          {income}
        </p>
      </div>
      <div>
        <h4>{translate("expense")}</h4>
        <p id="money_minus" className="minus">
          {expense}
        </p>
      </div>
    </div>
  );
};
