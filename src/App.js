import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import Header from 'components/Header/Header'

import ViewButtonNavigation from 'views/ViewButtonNavigation.jsx'
import ViewAccountInfo from 'views/ViewAccountInfo/ViewAccountInfo.jsx'
import ViewNewAccount from 'views/ViewNewAccount/ViewNewAccount.jsx'
import ViewTransferToken from 'views/ViewTransferToken/ViewTransferToken.jsx'
import ViewContract from 'views/ViewContract/ViewContract.jsx'
import Footer from 'components/Footer/Footer.jsx'
import AccountInfo from 'containers/SearchAccount/index.js'


const hist = createBrowserHistory();

export default function App() {
  return (
    <Router history={hist}>
      <Switch>
      <div>
      <Header 
          accountInfoTab={<AccountInfo />}
          newAccountTab={<ViewNewAccount/>}
          transferTokenTab={<ViewTransferToken />}
          //contractTab={<TokenCard />}
        />
        {/* <ViewAccountInfo /> */}
        <Footer/>

      </div>      
      </Switch>
    </Router>
  );
}