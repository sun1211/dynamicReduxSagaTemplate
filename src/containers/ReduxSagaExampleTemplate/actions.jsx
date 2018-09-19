/*
 * actions
 */

import { DEFAULT, LOAD_ACCOUNT, LOAD_HISTORY} from './constants';

export function LoadAccount(account) {
    return {
      type: LOAD_ACCOUNT,
      account,
    };
  }

export function LoadHistory(account) {
    return {
      type: LOAD_HISTORY,
      account,
    };
  }

  export default function defaultAction(form) {
    return {
      type: DEFAULT,
      form,
    };
  }