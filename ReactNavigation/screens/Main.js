import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Container, Text, Content, Icon } from 'native-base';
import {createBottomTabNavigator} from 'react-navigation';
import HomeTab from './tabs/HomeTab'
import PlanetTab from './tabs/PlanetTab'
import BasketTab from './tabs/BasketTab'
import Booktab from './tabs/BookTab'
import CartTab from './tabs/CartTab'




export default class Main extends Component {
  static navigationOptions = {
      headerLeft: <Icon 
          name= {Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'}
          style={{ paddingLeft: 10 }}
      />,
      title: 'NativeBase Example',

      headerRight: <Icon 
            name= {Platform.OS === 'ios' ? 'ios-compass' : 'md-compass'}
            style={{ paddingRight: 10 }}
      />,
  }
  render() {
    return (
      <MainNavigator>
          <Text>This is my screen</Text>
      </MainNavigator>
    );
  }
}

const MainNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    PlanetTab: {
        screen: PlanetTab
    },
    BasketTab: {
        screen: BasketTab
    },
    Booktab: {
        screen: Booktab
    },
    CartTab: {
        screen: CartTab
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'white',
        },
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
    }
    
});