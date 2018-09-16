import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from '@material-ui/core/Button';
import CustomInput from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import SearchBar from "components/SearchBar/SearchBar.jsx";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';

import styleSectionAccount from "views/ViewNewAccount/Sections/styleSectionAccount.jsx";


class SectionAccount extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      password: '',

      showPassword: false,
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
            Create New Account
        </Typography>
          <div>
            <FormControl className={classes.bootstrapInput}>
              <Input
                id="custom-css-input"
                disableUnderline="false"
                placeholder='Enter EOS Account'
                className={classes.input}
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
            </FormControl>
          </div>

          <div>
            <FormControl className={classNames(classes.margin, classes.bootstrapInput)}>
              <Input
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}
                disableUnderline="false"
                fullWidth="true"
                placeholder='Password'
                className={classes.input}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styleSectionAccount)(SectionAccount);
