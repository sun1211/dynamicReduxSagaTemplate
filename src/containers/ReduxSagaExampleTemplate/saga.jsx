import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY } from './constants';
import { LoadAccount, LoadHistory } from './actions';

function* watchDynamic() {


}

function* watchDynamic() {
    yield takeLatest(LOOKUP_ACCOUNT, watchDynamic);
  }

export default function* rootSaga() {
    yield all([watchDynamic(),]);
  }

