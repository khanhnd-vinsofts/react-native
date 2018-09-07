import * as types from './types';
import user from  '../../data/user.json';


export function logIn(email, password) {
    return (dispatch, getState) => {
        if(email === user.email && password === user.password) {
            dispatch(setLoggedInstate(true));
            return true;
        }
            dispatch(setLoggedInstate(false));
            return false;
    }
}



export function setLoggedInstate(loggedInState) {
    return {
        type: types.SET_LOGGED_IN_STATE,
        loggedInState,
    }
}