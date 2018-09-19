import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from 'components/Header/Header'
import ViewNewAccount from 'views/ViewNewAccount/ViewNewAccount.jsx'
import ViewTransferToken from 'views/ViewTransferToken/ViewTransferToken.jsx'
import Footer from 'components/Footer/Footer.jsx'
import AccountInfo from 'containers/SearchAccount/index.js'

const hist = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    default: { main: '#ffc107' },
    inherit: { main: '#4caf50' },
    primary: { main: '#7190eb' },
    secondary: { main: '#9c27b0' },
    warning: { main: '#ff9800' },
    success: { main: '#4caf50' },
    info: { main: '#00acc1' },
    danger: { main: '#f44336' },
    gray: { main: '#999999' },
    white: { main: '#ffffff' },
  },
  shadows: ["none"],
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
    
});

export default function App() {
  return (
    <Router history={hist}>
      <Switch>
        <MuiThemeProvider theme={theme}>
          <Header
            accountInfoTab={<AccountInfo />}
            newAccountTab={<ViewNewAccount />}
            transferTokenTab={<ViewTransferToken />}
          //contractTab={<TokenCard />}
          />
          <Footer />
        </MuiThemeProvider>
      </Switch>
    </Router>
  );
}