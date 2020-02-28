import React, { createContext, useReducer } from "react";
import axios from 'axios';
//access the reducer
import { AppReducer } from "./AppReducer";

// initial state
const initialState = {
  transactions: [],
  error:null,
  loading: true
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

   async function getTransactions() {
    try {
      const res = await axios.get('/api/transactions');
      
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      })
    }
  };

  async function deleteTransaction(id){
    try {
       await axios.delete(`/api/transactions/${id}`);
       dispatch({
         type: "DELETE_TRANSACTION",
         payload: id
       });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  };

  async function addTransaction (transaction) {
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/transactions',transaction,config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
      
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        deleteTransaction,
        addTransaction,
        getTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
