/**
 *
 * SearchAccount
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { lookupAccount, lookupPubkey } from './actions';
import { makeSelectSearchAccounts, makeSelectSearchLoading, makeSelectSearchHistory, makeSelectSearchTokenBalance } from './selectors';

import ViewAccountInfo from 'views/ViewAccountInfo/ViewAccountInfo.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export class SearchAccount extends React.Component {
  render() {
    return (
      <ViewAccountInfo {...this.props}/>
    );
  };
}

const mapStateToProps = createStructuredSelector({
  accounts: makeSelectSearchAccounts(),
  historys: makeSelectSearchHistory(),
  tokenBalances: makeSelectSearchTokenBalance(),
  loading: makeSelectSearchLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    //handleAccountName: form => dispatch(lookupAccount(form)),
     handleAccountName: form => dispatch(lookupAccount("zbeosbp11111")),
    // handlePublicKey: form => dispatch(lookupPubkey(form.publicKey)),

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'SearchAccount', reducer });
const withSaga = injectSaga({ key: 'SearchAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SearchAccount);
