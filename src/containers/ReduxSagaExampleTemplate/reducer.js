import { fromJS } from 'immutable';
import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY} from './constant';

const initialState = fromJS({
  name: '',
  account: [],
  history: [],
});

function DynamicReducer(state = initialState, action) {
    switch (action.type) {
      case DEFAULT:
      console.log("tam DynamicReducer DEFAULT");
        return state.set('name', action.name);
      case LOAD_ACCOUNT:
      console.log("tam DynamicReducer LOAD_ACCOUNT", action.account);
        return state.set('account', action.account);
      case LOAD_HISTORY:
      console.log("tam DynamicReducer LOAD_HISTORY");
        return state.set('history', action.history);
      default:
        return state;
    }
  }
  
  export default DynamicReducer;