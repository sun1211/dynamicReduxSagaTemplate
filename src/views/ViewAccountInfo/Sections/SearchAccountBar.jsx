/*eslint-disable no-unused-vars */
import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginBottom: "20px",
    marginTop: "20px",
  },
  searchInput: {
    minWidth: "400px",
    marginRight: "10px",
    borderRadius: 4,
    backgroundColor: '#ffffff',
    border: '1px solid #7190eb',
    padding: '5px 12px'
  },
};

class SearchAccountBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  onChangeText(e) {
    // console.log("tam_ onChangeText ", e.target.value);
    this.setState({ name: e.target.value });


  };
  handleClick(e) {
    // console.log("tam_ handle click ", this.state.name);
    this.props.handleAccountName(this.state.name);
  }

  render() {
    return (
      <div>
        <Grid container justify="center" className={this.props.classes.root}>
          <Input
            placeholder="Search Account"
            disableUnderline="false"
            required='true'
            onChange={this.onChangeText}
            className={this.props.classes.searchInput}
          />
          <Button variant="contained" color="primary" onClick={this.handleClick} >
            Search
          </Button>

        </Grid>
      </div>
    )
  };
}

export default withStyles(styles)(SearchAccountBar);
