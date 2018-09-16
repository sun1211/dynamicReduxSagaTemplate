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
import TokenCard from 'components/TokenCard/TokenCard.jsx';
import Divider from "@material-ui/core/Divider"


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
    border: '1px solid #7190eb',
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
  firstCard:{
    padding: '10px'
  }
});



class ViewTransferToken extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
    };
  }




  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={20}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

          <Grid item xs={7} spacing={20} className={classes.firstCard}>
            <Card className={classes.card}>
              <CardHeader
               className={classes.cardHeader}
                // avatar={
                //   <Avatar aria-label="Recipe" className={classes.avatar}>S</Avatar>
                // }
                title="Send"
                titleTypographyProps={{
                  variant: 'title',
                  color: 'inherit',
                }}
              />
              <Divider/>
              <CardContent>
                <div className={classes.buttonholder}>
                  <Typography className={classes.title} variant="subheading" color="primary">Send To</Typography>

                  <Input
                    placeholder="EOS Account"
                    className={classes.bootstrapInput}
                    disableUnderline="false"
                    required='true'
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          <AccountCircle />
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                  <Typography className={classes.title} variant="subheading" color="primary">
                    Amount</Typography>
                  <Input
                    placeholder="0.0000"
                    className={classes.bootstrapInput}
                    disableUnderline="false"
                    endAdornment={
                      <InputAdornment position="end">
                        <NativeSelect
                          className={classes.selectEmpty}
                          value={this.state.age}
                          name="age"
                          disableUnderline
                          onChange={this.handleChange('age')}
                        >
                          <option value={0}>EOS</option>
                          <option value={10}>QUO</option>
                          <option value={20}>IQ</option>
                          <option value={30}>BEANS</option>
                        </NativeSelect>
                      </InputAdornment>
                    }
                  />

                  <Typography className={classes.title} variant="subheading" color="primary">
                    Memo
                  </Typography>

                  <Input
                    placeholder="Your Message"
                    className={classes.bootstrapInput}
                    disableUnderline="false"
                    margin='dense'
                  />
                </div>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <Button size="medium" variant="contained" color="primary" className={classes.button}>
                  Send
                  </Button>
              </CardActions>
            </Card>
          </Grid>

            <Grid key={1} item xs={5} className={classes.firstCard}>
            <Card className={classes.card}>
              <CardHeader
               className={classes.cardHeader}
                // avatar={
                //   <Avatar aria-label="Recipe" className={classes.avatar}>A</Avatar>
                // }
                title="Available Token"
                titleTypographyProps={{
                  variant: 'title',
                  color: 'inherit',
                }}
              />
              <Divider/>
              <CardContent>
                <TokenCard/>
              </CardContent>

            </Card>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    );
  }
}

ViewTransferToken.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewTransferToken)