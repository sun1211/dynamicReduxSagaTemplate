import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SearchAccountBar from 'views/ViewAccountInfo/Sections/SearchAccountBar'
import ShowAccountInforForm from "views/ViewAccountInfo/Sections/ShowAccountInforForm"
import ShowTokeBalance from "views/ViewAccountInfo/Sections/ShowTokenBalance"
import CircularProgress from '@material-ui/core/CircularProgress';
import ShowAccountHistory from 'views/ViewAccountInfo/Sections/ShowAccountHistory.jsx';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  searchDisplay:{
    marginTop: '15%',
  },
});

function LoadingSpinner(props) {
  if (props.loading) {
    return <CircularProgress color="primary" style={{marginLeft: '45%'}}/>;
  }
  return '';
}

class ViewAccountInfo extends React.Component {
  state = {
    spacing: '16',
    firstSearch: true,
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const {
      classes,  
    } = this.props;
    return (

      <Grid container direction="row" spacing={16} justify="center">

        <Grid item xs={12} className={this.state.firstSearch ?classes.searchDisplay: '' } >
        {this.state.firstSearch = false}
          <SearchAccountBar {...this.props} />
        </Grid>

        <Grid item xs={12} justify="center">
          <LoadingSpinner {...this.props} />
        </Grid>

        <Grid item xs={7}>
          {this.props.accounts.map(account => {
            if (account)
              return <ShowAccountInforForm account={account} />
          })}
        </Grid>
        
        <Grid item xs={5}>
            {
              this.props.tokenBalances.map(tokenData => {
                if (tokenData)
                  return <ShowTokeBalance tokenBalance={tokenData} />
              })}
          </Grid>

        <Grid item xs={12}>
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

export default withStyles(styles)(ViewAccountInfo);