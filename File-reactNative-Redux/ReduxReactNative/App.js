
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import LoggedOut from './src/screens/Loggedout';
import LogIn from './src/screens/LogIn';
import ForgotPassword from './src/screens/ForgotPassword';
import LoggedIn from './src/screens/LoggedIn'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <LoggedIn />
      </Provider>
    );
  }
}

