import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CheckCircle from '@material-ui/icons/CheckCircle';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classnames from 'classnames';
import SectionAccount from 'views/ViewNewAccount/Sections/SectionAccount.jsx'
import SectionDownloadKey from 'views/ViewNewAccount/Sections/SectionDownloadKey.jsx'
import SectionActiveAccount from  'views/ViewNewAccount/Sections/SectionActiveAccount.jsx'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '20px 20px',
    height: 350,
    //width: 600,
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
  textField: {
    //width: '100%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  bootstrapInput: {
    margin: '5px auto',
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #e0b4b4',
    color: '#9f3a38',
    fontSize: 18,
    lineHeight: "1.21428571em",
    padding: '7px 15px',
    //minWidth:'500px',
    width:'90%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace',
    ]
  },
  buttonholder: {
    margin:'0px auto',

  },
  button:{
    marginLeft:'auto',
  },
  cardHeader:{
    borderBottom:'1px solid hsla(0,0%,74%,.2)',
  },
  cardContent:{
    height: '350px'

  },
  firstCard:{
    padding: '10px'
  }

});

function getStepContent(step) {
  console.log(step);
  switch (step) {
    case 0:
      return <SectionAccount/>;
    case 1:
      return <SectionDownloadKey/>;
    case 2:
      return <SectionActiveAccount/>;
    default:
      return <SectionAccount/>;
  }
}

class ViewNewAccount extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      activeStep: 0,
    };
  }

  nextStep = () => {
    const { activeStep } = this.state;
    console.log(activeStep);
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const { activeStep } = this.state;

    return (
      <Grid container className={classes.root} spacing={20}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

          <Grid item xs={8} spacing={20} className={classes.firstCard}>
            <Card className={classes.card}>
              <CardHeader
               className={classes.cardHeader}
                title="New Account"
                titleTypographyProps={{
                  variant: 'title',
                  color: 'inherit',
                }}
              />
              <CardContent className={classes.cardContent}>
                {
                  getStepContent(activeStep)
                }
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <Button size="medium" 
                variant="contained" 
                color="primary" 
                disabled={activeStep >= 2}
                className={classes.button} 
                onClick={this.nextStep}>
                  {activeStep === 2 ? 'Finish' : 'Next'}
                  </Button>
              </CardActions>
            </Card>
          </Grid>

            <Grid key={1} item xs={4} className={classes.firstCard}>
            <Card className={classes.card}>
              <CardHeader
               className={classes.cardHeader}
                title="Help"
                titleTypographyProps={{
                  variant: 'title',
                  color: 'inherit',
                }}
              />
              <CardContent>
              

              </CardContent>

            </Card>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    );
  }
}

ViewNewAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewNewAccount)
