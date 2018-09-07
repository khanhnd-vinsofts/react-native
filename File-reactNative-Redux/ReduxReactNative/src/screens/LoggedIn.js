import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { transparentHeaderStyle } from '../styles/navigation';
import LoggedInTabNavigator from '../navigators/LoggedInTabNavigator';
export default class LoggedIn extends Component {


  render() {
    return (
      <LoggedInTabNavigator />
    );
  }
}
