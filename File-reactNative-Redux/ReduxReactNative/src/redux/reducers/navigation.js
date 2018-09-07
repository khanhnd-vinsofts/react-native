import createReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut');
const initialState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialState, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};