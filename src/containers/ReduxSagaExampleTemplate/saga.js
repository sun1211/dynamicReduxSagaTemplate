import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY } from './constant';
import { LoadAccount, LoadHistory } from './actions';
import { makeSelectLoadAccount } from './selector'

import ScatterJS from 'scatter-js/dist/scatter.esm.js';
import Eos from 'eosjs';

const signerClientConfig = {
  protocol: 'https',
  blockchain: 'eos',
  host: 'api.eosdetroit.io',
  port: '443',
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
};
const networkOptions = {
  broadcast: true,
  sign: true,
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
};
const protocol = 'https';

const networkConfig = {
  protocol: 'https',
  blockchain: 'eos',
  host: 'api.eosdetroit.io',
  port: '443',
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
};
const networkReaderOption = {
  broadcast: false,
  sign: false,
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
  httpEndpoint: 'https://api.eosdetroit.io:443',
};


function* fetchIdentity(signer) {
  try {
    // build a network to suggest


    // suggest the network to the user
    yield signer.suggestNetwork(networkConfig);

    if (signer.identity) {
      yield signer.forgetIdentity();
    }

    // get identities specific to the activeNetwork
    const id = yield signer.getIdentity({
      accounts: [
        {
          chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
          blockchain: 'eos',
        },
      ],
    });

    window.scatter = null;




    // console.log(id);

    const match = id && id.accounts.find(x => x.blockchain === 'eos');

    if (match) {
      return match;
    }
    return null;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return null;
  }
}

function* doWatchDynamic() {
  //===========================signer===========================================
  const signer = ScatterJS.scatter;
  console.log("tam_ signer", signer);

  //===========================identity===========================================
  const identity = yield call(fetchIdentity, signer);
  console.log("tam _ identity", identity);

  //======================transaction==================================
  const transaction = [
    {
      account: 'eosio.token',
      name: 'transfer',
      data: {
        from: 'demdemdemdem',
        to: 'tamtamtamtam',
        memo: 'new demo tamtamtmatm',
        quantity: '1.0000 EOS',
      },
    },
  ];
  const actions = transaction.map(tx => {
    return {
      ...tx,
      authorization: [{ actor: 'demdemdemdem', permission: 'active' }],
    };
  });
  console.log("tam_ actions", actions);
  //===========================networkWriter===========================================
  const networkWriter = ScatterJS.scatter.eos(signerClientConfig, Eos, networkOptions, protocol);
  console.log("tam _ networkWriter", networkWriter);


  //============================networkReader==========================================
  const networkReader = yield Eos(networkReaderOption);
  console.log("tam _ networkReader", networkReader);

  //======================================================================

  const res = yield networkWriter.transaction({ actions });

  console.log("tam _ res", res, res.transaction_id);






















}

function* watchDynamic() {
  yield takeLatest(LOAD_ACCOUNT, doWatchDynamic);
}

export default function* rootSaga() {
  yield all([watchDynamic()]);
}

