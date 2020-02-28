/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'

import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { translate } from '../i18n/translate';
import "../App.css";

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
      getTransactions();
    }, []);
    
    return (
      <>
        <h3>{translate("history")}</h3>
        <ul id="list" className="list">
          {transactions.map(transaction => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      </>
    );
}
