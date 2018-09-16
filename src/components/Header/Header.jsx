import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from "components/SearchBar/SearchBar.jsx";
import Avatar from '@material-ui/core/Avatar';
import image from "assets/images/avatar.jpg";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
  grayColor,
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/eos-wallet-react.jsx";

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
    backgroundColor: grayColor,
  },
  tile: {
    flexGrow: 1,
    //padding: 8 * 2,
  },
  search:{
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
  appBar:{
    },
    tabBar:{
      padding:'16px'
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
        <AppBar position="static" className={classes.appBar}>
        
          <Toolbar>
          <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
            <Typography variant="display1" color="inherit" component="div" className={classes.tile}>
              EOSGUI
            </Typography>
            <Tabs
            value={value}
            onChange={this.handleChange}
            className={classes.tabBar}
            indicatorColor="secondary"
            textColor="inherit"
            wrapper
          >
            <Tab label="New Account" />
            <Tab label="Account Info"  />
            <Tab label="Transfet Token"  />
            <Tab label="Contract"  />

          </Tabs>

          </Toolbar>
        </AppBar>
        {value === 0 && <TabContainer><div className={classes.appResponsive}>{newAccountTab}</div></TabContainer>}
        {value === 1 && <TabContainer><div className={classes.appResponsive}>{accountInfoTab}</div></TabContainer>}
        {value === 2 && <TabContainer><div className={classes.appResponsive}>{transferTokenTab}</div></TabContainer>}
        {value === 3 && <TabContainer><div className={classes.appResponsive}>{contractTab}</div></TabContainer>}           
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