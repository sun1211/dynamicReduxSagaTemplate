import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from "components/SearchBar/SearchBar.jsx";
import Avatar from '@material-ui/core/Avatar';
import WalletLogo from "assets/images/wallet-logo.png";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(241, 242, 250)',
  },
  tile: {
    flexGrow: 1,
    padding: 4 * 2,
  },
  search: {
    //flexGrow: 1,
    border: 20,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    margin: 0,
  },
  toolBar: {
    padding: '0px 10%',
    minHeight:'0px',

  },
  tabLabel:{
    lineHeight: '50px',
    fontSize:'15px',
    fontWeight: 'bold',
  },
  tabContainer:{
    padding: '0px 10%',
    minHeight: 'calc(100vh - 200px)',
  }

};

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { value } = this.state;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const {
      classes,
      accountInfoTab,
      newAccountTab,
      transferTokenTab,
      contractTab,
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="white" className={classes.appBar}>

          <Toolbar className={classes.toolBar}>
            <Avatar alt="Remy Sharp" src={WalletLogo} className={classes.avatar} />
            <Typography variant="display1" color="inherit" className={classes.tile}>
              EOSGUI
            </Typography>
            <Tabs
              value={value}
              onChange={this.handleChange}
              className={classes.tabBar}
              indicatorColor="primary"
              textColor="inherit"
              wrapper
            >
              <Tab label={<span className={classes.tabLabel}>Account Balance</span>}/>
              <Tab label={<span className={classes.tabLabel}>New Account</span>}/>
              <Tab label={<span className={classes.tabLabel}>Transfer</span>}/>
              <Tab label={<span className={classes.tabLabel}>Contract</span>}/>

            </Tabs>

          </Toolbar>
        </AppBar>
        {value === 0 && <TabContainer><div className={classes.tabContainer}>{accountInfoTab}</div></TabContainer>}
        {value === 1 && <TabContainer><div className={classes.tabContainer}>{newAccountTab}</div></TabContainer>}
        {value === 2 && <TabContainer><div className={classes.tabContainer}>{transferTokenTab}</div></TabContainer>}
        {value === 3 && <TabContainer><div className={classes.tabContainer}>{contractTab}</div></TabContainer>}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  accountInfoTab: PropTypes.node,
  newAccountTab: PropTypes.node,
  transferTokenTab: PropTypes.node,
  contractTab: PropTypes.node,
};

export default withStyles(styles)(Header);