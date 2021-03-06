/*
 *
 * SearchAccount actions
 *
 */

import { DEFAULT_ACTION, LOOKUP_ACCOUNT, LOOKUP_PUBKEY, LOOKUP_LOADING, LOOKUP_LOADED , LOOKUP_LOADED_ACCOUNT, LOOKUP_LOADED_TOKEN, LOOKUP_LOADED_HISTORY} from './constants';

export function lookupAccount(name) {
  console.log("tam LOOKUP_ACCOUNT A");
  return {
    type: LOOKUP_ACCOUNT,
    name,
  };
}

export function lookupPubkey(pubkey) {
  return {
    type: LOOKUP_PUBKEY,
    pubkey,
  };
}

export function lookupLoading() {
  return {
    type: LOOKUP_LOADING,
  };
}

export function lookupLoaded(accounts, historys, tokenBalances) {
  return {
    type: LOOKUP_LOADED,
    accounts,
    historys,
    tokenBalances,
  };
}

export function lookupLoadedAccount(accounts) {
  return {
    type: LOOKUP_LOADED_ACCOUNT,
    accounts,
  };
}
export function lookupLoadedToken(tokenBalances) {
  return {
    type: LOOKUP_LOADED_TOKEN,
    tokenBalances,
  };
}
export function lookupLoadedHistory(historys) {
  return {
    type: LOOKUP_LOADED_HISTORY,
    historys,
  };
}

export default function defaultAction(form) {
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
