/**
 * Test resux saga template
 */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import { LoadAccount, LoadHistory } from './actions';
import { makeSelectLoadAccount, makeSelectLoadHistory  } from './selector';

export class DynamicTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'data when click button',
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    console.log("tam_ handle click ", this.state.name);
    this.props.handleAccount(this.state.name);
  }

    render() {
      return (
        <button variant="contained" color="primary" onClick={this.handleClick} >
        TEST
      </button>
      );
    };
  }
  const mapStateToProps = createStructuredSelector({
    accounts: makeSelectLoadAccount(),
    historys: makeSelectLoadHistory(),
  });
  
  function mapDispatchToProps(dispatch) {
    return {
      handleAccount: form => dispatch(LoadAccount(form)),
      handleHistory: form => dispatch(LoadHistory(form)),
    };
  }

  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );

const withReducer = injectReducer({ key: 'DynamicTemplate', reducer });
const withSaga = injectSaga({ key: 'DynamicTemplate', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect
  )(DynamicTemplate);