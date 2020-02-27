import React from 'react'

// import { I18nProvider, LOCALES } from "../i18n";
import { translate } from "../i18n/translate";
// import { FormattedMessage } from "react-intl";

import '../App.css'
export function Header() {
    return (
      <div className="header">
        {/* <h2>
          <FormattedMessage id="expense_tracker" />
        </h2> */}
        <h2>{translate("expense_tracker")}</h2>
      </div>
    );
}

