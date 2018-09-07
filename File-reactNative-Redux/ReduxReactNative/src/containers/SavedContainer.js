import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SavedContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'SAVED',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name="md-heart-empty"
        size={22}
        color={tintColor}
      />
  ),
  };

  render() {
    return (
      <View>
        <Text> Save Container </Text>
      </View>
    );
  }
}
