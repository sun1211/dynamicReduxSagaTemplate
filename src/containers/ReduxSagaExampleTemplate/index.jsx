/**
 * Test resux saga template
 */
import React from 'react';
import  connect  from 'react-redux';
import  createStructuredSelector  from 'reselect';
import  compose  from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import { LoadAccount, LoadHistory } from './actions';
import { makeSelectLoadAccount, makeSelectLoadHistory  } from './selectors';

export class DynamicTemplate extends React.Component {
    render() {
      return (
          ""
      );
    };
  }
  const mapStateToProps = createStructuredSelector({
    accounts: makeSelectLoadAccount(),
    historys: makeSelectLoadHistory(),
    // tokenBalances: makeSelectSearchTokenBalance(),
    // loading: makeSelectSearchLoading(),
  });
  
  function mapDispatchToProps(dispatch) {
    return {
      handleAccount: form => dispatch(LoadAccount(form)),
      handleHistory: form => dispatch(LoadHistory(form)),
    //    handleAccountName: form => dispatch(lookupAccount("eosbetdice11")),
      // handlePublicKey: form => dispatch(lookupPubkey(form.publicKey)),
  
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