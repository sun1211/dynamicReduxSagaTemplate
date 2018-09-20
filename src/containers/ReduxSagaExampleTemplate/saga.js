import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY } from './constant';
import { LoadAccount, LoadHistory } from './actions';
import { makeSelectLoadAccount } from './selector'

import ScatterJS from 'scatter-js/dist/scatter.esm.js';
import Eos from 'eosjs';

const signerClientConfig = {
  protocol: 'https',
  blockchain: 'eos',
  host: 'nodes.get-scatter.com',
  port: '443',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};
const networkOptions = {
  broadcast: true,
  sign: true,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};
const protocol = 'https';

const networkConfig = {
  protocol: 'https',
  blockchain: 'eos',
  host: 'nodes.get-scatter.com',
  port: '443',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};
const networkReaderOption = {
  broadcast: false,
  sign: false,
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
  httpEndpoint: 'https://nodes.get-scatter.com:443',
};
const tokensUrl = 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json';

function* fetchTokenInfo(reader, account, symbol) {
  try {
    if (symbol === 'OCT') throw { message: 'OCT has no STATS table - please fix!' };
    const stats = yield reader.getCurrencyStats(account, symbol);
    const precision = stats[symbol].max_supply.split(' ')[0].split('.')[1].length;
    return {
      account,
      symbol,
      precision,
    };
  } catch (c) {
    return {
      account,
      symbol,
      precision: 4,
    };
  }
}

function* fetchTokens(reader) {
  try {
    const data = yield fetch(tokensUrl);
    const list = yield data.json();

    const tokenList = [
      {
        symbol: "EOS",
        account: "eosio.token"
      },
      ...list
    ]
    const info = yield all(
      tokenList.map(token => {
        return fork(fetchTokenInfo, reader, token.account, token.symbol);
      })
    );
    const tokens = yield join(...info);
    return tokens;
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
    return null;
  }
}

const makeTransaction = (values, eosTokens) => {
  const token = eosTokens.find(tk => tk.symbol === values.symbol);
  const transaction = [
    {
      account: token.account,
      name: 'transfer',
      data: {
        from: values.owner,
        to: values.name,
        memo: values.memo,
        quantity: `${Number(values.quantity)
          .toFixed(token.precision)
          .toString()} ${values.symbol}`,
      },
    },
  ];
  return transaction;
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
          chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
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

  //============================networkReader==========================================
  const networkReader = yield Eos(networkReaderOption);
  console.log("tam _ networkReader", networkReader);

  //======================transaction==================================
  const eosTokens = yield call(fetchTokens, networkReader);
  console.log("tam_ eosTokens", eosTokens);

  const valueForm = 
    {
      memo: "_____________",
      name: "123eosgui123",
      owner: "hoangngoctam",
      quantity: "0.001",
      symbol: "EOS",
    };

  const transaction = makeTransaction(valueForm, eosTokens);
  console.log("tam_ transaction ", transaction);

  // const transaction = [
  //   {
  //     account: 'eosio.token',
  //     name: 'transfer',
  //     data: {
  //       from: 'demdemdemdem',
  //       to: 'tamtamtamtam',
  //       memo: 'new demo tamtamtmatm',
  //       quantity: '1.0000 EOS',
  //     },
  //   },
  // ];
  const actions = transaction.map(tx => {
    return {
      ...tx,
      authorization: [{ actor: identity.name, permission: identity.authority }],
    };
  });
  console.log("tam_ actions", actions);


  //===========================networkWriter===========================================
  const networkWriter = ScatterJS.scatter.eos(signerClientConfig, Eos, networkOptions, protocol);
  console.log("tam _ networkWriter", networkWriter);





  //======================================================================

  if (!networkWriter || !transaction || !identity) {
    throw { message: 'Writing is not enabled - check your Scatter connection' };
  }
  if (transaction.error) {
    throw { message: transaction.error };
  }
  if (transaction.success) {
    throw { message: transaction.success };
  }

  const res = yield networkWriter.transaction({ actions });

  console.log("tam _ res", res, res.transaction_id);

  //======================================================================
  // const transactionOptions = { authorization:[`${identity.name}@${identity.authority}`] };
  // console.log("Attempting to send tx to scatter:", transactionOptions);

  // networkWriter.transfer(identity.name, 'tamtamtamtam', '1.0000 EOS', 'test demo 2 lan', transactionOptions).then(trx => {
  //   console.log(`Transaction ID: ${trx.transaction_id}`);
  // });




















}

function* watchDynamic() {
  yield takeLatest(LOAD_ACCOUNT, doWatchDynamic);
}

export default function* rootSaga() {
  yield all([watchDynamic()]);
}

