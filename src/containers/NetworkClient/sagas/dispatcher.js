import { put, select, spawn } from 'redux-saga/effects';
import { buildReader, buildWriter } from './builders';
import { makeSelectSigner, makeSelectActiveNetwork, makeSelectReader, makeSelectWriter } from '../selectors';
import { loadAccount } from '../actions';

/*
*
* DISPATCHERS
* Ensure parallel events have all completed
*
*/

export function* buildDispatcher() {
  console.log("tam buildDispatcher");
  const signer = yield select(makeSelectSigner());
  console.log("tam_ LOADED signer", signer);
  const network = yield select(makeSelectActiveNetwork());
  console.log("tam_ LOADED network", network);
  // build only dispatches if we do have networks and signer
  if (network) {
    yield spawn(buildReader, network);
  }

  if (signer && network) {
    yield spawn(buildWriter, signer, network);
  }
}

export function* accountDispatcher() {
  const reader = yield select(makeSelectReader());
  const writer = yield select(makeSelectWriter());
  // account only dispatched if we have both a reader and writer
  if (reader && writer) {
    yield put(loadAccount());
  }
}
