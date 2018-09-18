import { fromJS } from 'immutable';
import {
  SET_SIGNER,
  LOADED_NETWORKS,
  READER_ENABLED,
  WRITER_ENABLED,
  WRITER_DISABLED,
  LOAD_ACCOUNT,
  LOADED_ACCOUNT,
  SET_NETWORK,
  SET_IDENTITY,
  PUSH_TRANSACTION,
  TOGGLE_OFFLINE,
} from './constants';

const initialState = fromJS({
  readerLoading: true,
  writerLoading: false,
  accountLoading: false,
  networkSigner: false,
  networkReader: null,
  networkWriter: null,
  networkIdentity: null,
  networkAccount: null,
  networkSelected: null,
  networks: [],
  tokens: [],
  transaction: null,
  offlineMode: false,
});

function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNER:
    console.log("tam: SET_SIGNER");
      return state.set('networkSigner', action.networkSigner).set('writerLoading', true);
    case LOADED_NETWORKS:
    console.log("tam: LOADED_NETWORKS");
      return state.set('networks', action.networks).set('networkSelected', action.defaultNetwork);
    case READER_ENABLED:
    console.log("tam: READER_ENABLED");
      return state
        .set('networkReader', action.networkReader)
        .set('tokens', action.tokens)
        .set('readerLoading', false);
    case WRITER_ENABLED:
    console.log("tam: WRITER_ENABLED");
      return state
        .set('networkWriter', action.networkWriter)
        .set('networkIdentity', action.networkIdentity)
        .set('writerLoading', false);
    case WRITER_DISABLED:
    console.log("tam: WRITER_DISABLED");
      return state
        .set('networkWriter', null)
        .set('networkAccount', null)
        .set('networkIdentity', null)
        .set('writerLoading', false);
    case LOAD_ACCOUNT:
    console.log("tam: LOAD_ACCOUNT");
      return state.set('accountLoading', true);
    case LOADED_ACCOUNT:
    console.log("tam: LOADED_ACCOUNT");
      return state.set('networkAccount', action.networkAccount).set('accountLoading', false);
    case SET_NETWORK:
    console.log("tam: SET_NETWORK");
      return state
        .set('networkSelected', action.networkSelected)
        .set('networkReader', null)
        .set('networkWriter', null)
        .set('networkAccount', null)
        .set('readerLoading', true)
        .set('writerLoading', true);
    case SET_IDENTITY:
    console.log("tam: SET_IDENTITY");
      return state
        .set('networkWriter', null)
        .set('networkAccount', null)
        .set('writerLoading', true);
    case PUSH_TRANSACTION:
    console.log("tam: PUSH_TRANSACTION");
      return state.set('transaction', action.transaction);
    case TOGGLE_OFFLINE:
    console.log("tam: TOGGLE_OFFLINE");
      return state.set('offlineMode', !state.get('offlineMode'));
    default:
      return state;
  }
}

export default clientReducer;
