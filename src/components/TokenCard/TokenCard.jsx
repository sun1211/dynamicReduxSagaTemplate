import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    
    backgroundColor: theme.palette.background.paper,
  },
  tokenValue:{
    //marginLeft:'auto',
    textAlign: 'right',
  },
  tokenList:{
    padding: '10px 0px',
  }
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem className={classes.tokenList}>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText className={classes.tokenName} 
          primary="eosio.token"
          primaryTypographyProps={{
                  variant: 'subheading',
                  color: 'inherit',
            }}/>
          <ListItemText className={classes.tokenValue} primary="0.0000 EOS" secondary="0.00 USD" />
        </ListItem>
        <li>
          <Divider inset />
        </li>
        <ListItem className={classes.tokenList}>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText className={classes.tokenName} 
          primary="eosio.abcdef"
          primaryTypographyProps={{
            variant: 'subheading',
            color: 'inherit',
            }}     />
          <ListItemText className={classes.tokenValue} primary="0.0000 IQ" secondary="0.00 USD" />
        </ListItem>
        <Divider inset component="li" />
        <ListItem className={classes.tokenList}>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText className={classes.tokenName} 
          primary="123eosgui123" 
          primaryTypographyProps={{
            variant: 'subheading',
            color: 'inherit',
            }}/>
          <ListItemText className={classes.tokenValue} primary="0.0000 BEAN" secondary="0.00 USD" />
        </ListItem>
      </List>
    </div>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);