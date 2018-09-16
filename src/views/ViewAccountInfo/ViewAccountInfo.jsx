import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import SearchAccountBar from '../../components/SearchAccountBar'
import ShowAccountInforForm from "../../components/ShowAccountInfoForm/ShowAccountInforForm"
import ShowTokeBalance from "../../components/ShowTokenBalance/ShowTokenBalance"
import ShowHistory from '../../components/showHistory'
import CircularProgress from '@material-ui/core/CircularProgress';
import ShowAccountHistory from '../../components/ShowAccountHistory/ShowAccountHistory';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 350,
    width: 600,
  },
  history: {
    padding: '50px',
    margin: ' 20px auto',
    maxWidth: '80%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

function LoadingSpinner(props) {
  if (props.loading) {
    return <CircularProgress color="secondary" />;
  }
  return '';
}

class ViewAccountInfo extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { spacing } = this.state;
    const {
      classes,  
      accountInfoTab,
      newAccountTab,
      transferTokenTab,
      contractTab,
    } = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center">

        <Grid xs={12}>
          <SearchAccountBar{...this.props} />
        </Grid>

        <Grid xs={12}>
          <LoadingSpinner {...this.props} />
        </Grid>

        <Grid xs={6}>
          {this.props.accounts.map(account => {
            if (account)
              return <ShowAccountInforForm account={account} />
          })}
        </Grid>
        
        <Grid xs={6}>
            {
              this.props.tokenBalances.map(tokenData => {
                if (tokenData)
                  return <ShowTokeBalance tokenBalance={tokenData} />
              })}
          </Grid>

        <Grid xs={12}>
          {this.props.historys.map(history => {
            if (history)
              return <ShowAccountHistory history={history} />
          })}
        </Grid>

      </Grid>
    );
  }
}

ViewAccountInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

// ViewAccountInfo.propTypes = {
//   accounts,
//   historys,
//   tokenBalances,
//   loading,
// };

export default withStyles(styles)(ViewAccountInfo);