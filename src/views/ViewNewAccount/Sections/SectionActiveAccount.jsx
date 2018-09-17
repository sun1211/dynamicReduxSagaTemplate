import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import Button from '@material-ui/core/Button';

//import CustomInput from "components/CustomInput/CustomInput.jsx";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Check from '@material-ui/icons/Check';
import styleSectionAccount from "views/ViewNewAccount/Sections/styleSectionAccount.jsx";


class SectionActiveAccount extends React.Component {
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
    const { classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
        <div>
            <Typography className={classes.title} variant="title" noWrap>
              Are you already have an account?
        </Typography>

            <Button variant="extendedFab" color="primary" className={classes.button}>
              Active Now
        <Check className={classes.rightIcon}></Check>
            </Button>
          </div>

          <Typography className={classes.title} variant="title" noWrap>
            If Not, Buy EOS from Exchange and following instruction
        </Typography>
          <div>
            <FormControl className={classes.formActiveAccount}>
            Send To
            <TextField
                defaultValue='123eosgui123'
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
              Amount

                <TextField
                defaultValue='0.7000 EOS'
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
              Memo
              <TextField
                defaultValue='123eosgui123-EOS7bDiaVYdQHvDRcHA5Vx5Nijm5htvMRQtk8vpuHoB8Sp3GLkSGq'
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
        </div>
      </div>

    );
  }
}

SectionActiveAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSectionAccount)(SectionActiveAccount);
