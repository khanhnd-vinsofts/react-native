import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../app/reducers/index' //import reducer


export default createStore(
    reducers, 
    applyMiddleware(thunk)
);