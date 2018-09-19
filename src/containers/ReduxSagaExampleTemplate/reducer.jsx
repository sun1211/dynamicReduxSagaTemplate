import { fromJS } from 'immutable';
import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY} from './constants';

const initialState = fromJS({
  name: '',
  pubkey: '',
  loading: false,
  accounts: [],
  history: [],
  tokenBalance:[],
});

function DynamicReducer(state = initialState, action) {
    switch (action.type) {
      case DEFAULT:
      console.log("tam LOOKUP_ACCOUNT");
        return state.set('name', action.name);
      case LOAD_ACCOUNT:
        return state.set('pubkey', action.pubkey);
      case LOAD_HISTORY:
        return state.set('loading', true);


      default:
        return state;
    }
  }
  
  export default DynamicReducer;