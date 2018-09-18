/**
 *
 * Toolkit Connector
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import routes from 'routes/dashboard';
import { makeSelectAccount, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { pushTransaction } from 'containers/NetworkClient/actions';
// import { stageTransaction } from 'containers/OfflineClient/actions';

const Connector = props => {

};

const mapStateToProps = createStructuredSelector({
  networkAccount: makeSelectAccount(),
  networkIdentity: makeSelectIdentity(),
});

function mapDispatchToProps(dispatch) {
  return {
    pushTransaction: (transaction,history) => dispatch(pushTransaction(transaction,history)),
    // stageTransaction: transaction => dispatch(stageTransaction(transaction)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connector);
