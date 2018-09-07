/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//Redux
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './app/reducers/index'


let store = createStore(allReducers);
const App = () => {
    <Provider store={store}>

    </Provider>
}



AppRegistry.registerComponent(appName, () => App);
