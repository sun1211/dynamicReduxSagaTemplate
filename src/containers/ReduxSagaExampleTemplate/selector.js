import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectDynamic = state => state.get('DynamicTemplate');

const makeSelectLoadAccount = () => createSelector(selectDynamic, substate => substate.get('account'));

const makeSelectLoadHistory = () => createSelector(selectDynamic, substate => substate.get('history'));



export default makeSelectLoadAccount;
export {
    selectDynamic,
    makeSelectLoadAccount,
    makeSelectLoadHistory,

};