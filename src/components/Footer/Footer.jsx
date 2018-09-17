//Import react
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Facebook from "assets/images/facebook.svg";
import Github from "assets/images/github.svg";
import Medium from "assets/images/medium.svg";
import Telegram from "assets/images/telegram.svg";
import Twitter from "assets/images/twitter.svg";


//style using in Footer

const FooterStyles = theme => (
  {
    icon: {
      margin: 3
    },
    footer: {
        bottom: '0',
        color: 'red',
        padding: '15px 0',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(241, 242, 250)',
      },
  }
)

//funciton Footer
function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
    <div>
      <Grid container spacing={30} direction="row"  justify="center" alignItems="center">
      <a href="https://facebook.com/" ><img alt="FB" height="70" width="70" src={Facebook} className={classes.icon}></img></a>
      <a href="https://github.com/" ><img alt="FB" height="70" width="70" src={Github} className={classes.icon}></img></a>
      <a href="https://medium.com/" ><img alt="FB" height="70" width="70" src={Medium} className={classes.icon}></img></a>
      <a href="https://telegram.org/" ><img alt="FB" height="70" width="70" src={Telegram} className={classes.icon}></img></a>
      <a href="https://twitter.com/" ><img alt="FB" height="70" width="70" src={Twitter} className={classes.icon}></img></a>
      </Grid>
    </div>
    </footer>
  )
}
export default withStyles(FooterStyles)(Footer);