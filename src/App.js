import React, { useState } from "react";
// import components
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

//import provider
import { GlobalProvider } from "./context/GlobalState";
import { I18nProvider, LOCALES } from "./i18n";
import { translate } from "./i18n/translate";
// import { FormattedMessage } from "react-intl";
const onSelect = (value) => {
  if (value === "Amharic") {
    return LOCALES.AMHARIC
  } else {
    return LOCALES.ENGLISH;
  }
}
function App() {
  const [locale, setlocale] = useState(LOCALES.ENGLISH);
  return (
    <div className="container">
      <I18nProvider locale={locale}>
        <GlobalProvider>
          <div className="translation">
            <select id="cars" className="form-control" onChange = {(event) =>setlocale(onSelect(event.target.value))}>
              <option value="English">English</option>
              <option value="Amharic">Amharic</option>
            </select>
          </div>
          <Header />
          <div className="container-fluid">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </GlobalProvider>
      </I18nProvider>
    </div>
  );
}

export default App;
