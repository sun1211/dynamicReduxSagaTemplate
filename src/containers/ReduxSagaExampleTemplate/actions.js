/*
 * actions
 */

import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY} from './constant';

export function LoadAccount(account) {
  console.log("tam_ action: LoadAccount: LOAD_ACCOUNT", account);
    return {
      type: LOAD_ACCOUNT,
      account,
    };
  }

export function LoadHistory(account) {
  console.log("tam_ action: LoadHistory: LOAD_HISTORY");
    return {
      type: LOAD_HISTORY,
      account,
    };
  }

  export default function defaultAction(form) {
    console.log("tam_ action: defaultAction: DEFAULT");
    return {
      type: DEFAULT,
      form,
    };
  }