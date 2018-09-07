import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TripsContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'TRIPS',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name="logo-ionic"
        size={22}
        color={tintColor}
      />
  ),
  };

  render() {
    return (
      <View>
        <Text> Trips Container </Text>
      </View>
    );
  }
}
