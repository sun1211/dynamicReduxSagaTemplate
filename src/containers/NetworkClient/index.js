/**
 *
 * NetworkClient
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import ScatterJS from 'scatter-js/dist/scatter.esm';
import { setSigner, loadNetworks, loadAccount } from './actions';
import saga from './sagas/watchers';

import Eos from 'eosjs';

// we inject out reducer at the root level for lazy loading order reasons
// const network = {
//   blockchain:'eos',
//   protocol:'https',
//   httpEndpoint: 'https://api.eosdetroit.io',
//   port:443,
//   chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
// }

const OldNetwork = {
  blockchain:'eos',
  host:'api.eosdetroit.io',
  port:443, 
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',

}
const kOptions = {
  broadcast: true,
  sign: true,
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
};

const networkOptions = {
  // chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
  // httpEndpoint: 'https://api.eosnewyork.io:443',
  // httpEndpoint: 'https://nodes.get-scatter.com:443',
  httpEndpoint: 'https://api.eosdetroit.io',
  port:443,
  blockchain:'eos',
  protocol:'https',
};


export class NetworkClient extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // // start loading the reader asap
    // this.props.loadNetworks();

    // ScatterJS.scatter.connect('EOSToolkit').then(connected => {
    //   if(connected){
    //     console.log("tam connected", ScatterJS.scatter);
    //       this.props.setSigner(ScatterJS.scatter);
    //       window.scatter = null;
    //   }
    // });

    // this.interval = setInterval(() => this.props.loadAccount(), 10000);
    // ScatterJS.scatter.connect('My App').then(connected => {
    //   if(!connected) return false;

    //   const scatter = ScatterJS.scatter;
    //   const requiredFields = { accounts:[networkOptions] };

    //   scatter.getIdentity(requiredFields);
    // })
  // First we need to connect to the user's Scatter.
  ScatterJS.scatter.connect('My App').then(connected => {
      // If the user does not have Scatter or it is Locked or Closed this will return false;
      if(!connected) return false;
      const scatter = ScatterJS.scatter;

     window.scatter = null;
      // Now we need to get an identity from the user.
      // We're also going to require an account that is connected to the network we're using.
      const requiredFields = { accounts:[
        {chainId:OldNetwork.chainId,
         blockchain:OldNetwork.blockchain}] };

         scatter.authenticate().then(result => {
console.log("tam ", result);
      
      }).catch(error => {
      });


         



      // const requiredFields = scatter.identity;
      console.log("tam _ requiredFields", requiredFields);
      scatter.getIdentity(requiredFields).then(() => {
        console.log("tam _get identifyer");
  
          const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
          console.log("tam account ", account);
  
          const eosOptions = { expireInSeconds:60 };
  
          const networkWriter = scatter.eos(OldNetwork, Eos, kOptions, 'https');
          console.log("tam _ networkIdentity", networkWriter);

          const transactions = {
            account: "eosio.token",
            name: "transfer",
            data: {
              from: "demdemdemdem",
              to: "tamtamtamtam",
              memo: "thi nghiem app",
              quantity: "1.0000 EOS"
            }
          };
          const action = {
            ...transactions,
            authorization: [ {actor: account.name, permission: account.authority} ],
          };
          const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
          console.log(`Attempting to send tx to scatter: ${JSON.stringify(action, null, 2)}`);

          networkWriter.transfer("demdemdemdem", 'tamtamtamtam', '1.0000 EOS', 'test demo 2 lan', transactionOptions).then(trx => {
            // That's it!
            console.log(`Transaction ID: ${trx.transaction_id}`);
        }).catch(error => {
            console.error( error);
        });

      //   networkWriter.transaction({action}).then(trx => {
      //     // That's it!
      //     console.log(`Transaction ID: ${trx.transaction_id}`);
      // }).catch(error => {
      //     console.error("tam ", error);
      // });



      }).catch(error => {
          // The user rejected this request, or doesn't have the appropriate requirements.
          console.error("tam " , error);
      });
  });

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return '';
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    loadNetworks: () => dispatch(loadNetworks()),
    loadAccount: () => dispatch(loadAccount()),
    setSigner: signer => dispatch(setSigner(signer)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'NetworkClient', saga });

export default compose(
  withSaga,
  withConnect
)(NetworkClient);
