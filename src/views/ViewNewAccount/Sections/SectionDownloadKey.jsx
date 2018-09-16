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
import Add from '@material-ui/icons/Add';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Copyright from '@material-ui/icons/Copyright';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import CloudDownload from '@material-ui/icons/CloudDownload';
import GetApp from '@material-ui/icons/GetApp';
import styleSectionAccount from "views/ViewNewAccount/Sections/styleSectionAccount.jsx";


class SectionDownloadKey extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      password: '',

      showPassword: false,
    };
  }

  handleCopyPrivateKey = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.title} variant="title" noWrap>
            Save Owner Private Key
        </Typography>
          <div>
            <FormControl className={classes.bootstrapInput}>
              <TextField
                defaultValue='7cba43acf2a80851f7319e95bf166b7200bab2ef876bf4387eaebf45b36d0993'
                InputProps={{
                  disableUnderline: true,
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleCopyPrivateKey}
                      >
                        <SaveIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  classes: {
                    root: classes.bootstrapRoot,
                    input: classes.inputPrivatekey,
                  },
                }}

              ></TextField>
            </FormControl>
          </div>
          <div>
            <Typography className={classes.title} variant="title" noWrap>
              Save Your KeyStore
        </Typography>

            <Button variant="extendedFab" color="primary" className={classes.button}>
              Download KeyStore File
        <GetApp className={classes.rightIcon}></GetApp>
            </Button>
          </div>
        </div>
      </div>

    );
  }
}

SectionDownloadKey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSectionAccount)(SectionDownloadKey);
