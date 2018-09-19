import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectDynamic = state => state.get('DynamicTemplate');

const makeSelectLoadAccount = () => createSelector(selectDomain, substate => substate.get('account'));

const makeSelectLoadHistory = () => createSelector(selectDomain, substate => substate.get('history'));



export default makeSelectDynamicTemplate;
export {
    selectDynamic,
    makeSelectLoadAccount,
    makeSelectLoadHistory,

};