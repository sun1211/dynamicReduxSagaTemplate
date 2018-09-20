import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY } from './constant';
import { LoadAccount, LoadHistory } from './actions';
import {makeSelectLoadAccount} from './selector'

function* doWatchDynamic() {
  console.log("tam_ saga doWatchDynamic LOAD_ACCOUNT");

  const accountName = yield select(makeSelectLoadAccount());
  console.log("tam saga : accountName", accountName);

  yield put(LoadHistory("history call"));
}

function* watchDynamic() {
    yield takeLatest(LOAD_ACCOUNT, doWatchDynamic);
  }

export default function* rootSaga() {
    yield all([watchDynamic()]);
  }

