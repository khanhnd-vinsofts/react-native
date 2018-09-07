import {combineReducers} from 'redux';
import {DATA_AVAILABLE} from '../actions';

let dataState = {data: [], loading: true};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, {data: action.data, loading:false});
            return state;
        default:
            return state;
    }
};


// kết hợp tất cả reducer

const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;