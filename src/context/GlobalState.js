import React, { createContext, useReducer } from "react";

//access the reducer
import { AppReducer } from "./AppReducer";

// import localization
import { translate } from "../i18n/translate";
// initial state
const initialState = {
  transactions: [
    { id: 1, item: translate('flower'), amount: -20 },
    { id: 2, item: translate('salary'), amount: 300 },
    { id: 3, item: translate('book'), amount: -10 },
    { id: 4, item: translate('camera'), amount: 20 },
    { id: 5, item: translate("freelance"), amount: 250 }
  ]
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const deleteTransaction = id => {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
  };

  const addTransaction = (transaction) => {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
      });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
