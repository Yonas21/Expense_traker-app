
import { GlobalContext } from "../context/GlobalState";
import React, { useContext } from 'react';
import { translate } from '../i18n/translate';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
      <div className = "show_remaining_balance">
        <h4>{translate("total_balance")}</h4>
        <h1 id="balance">${total}</h1>
      </div>
    );
}
