/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Maintenance from './app/components/Maintenance'
import Setting from './app/components/Setting'

class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText} >Trạng thái</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.content0}>
                  <Text style={styles.userUse}>Chưa có tên người sử dụng</Text>
                  <Text style={styles.userUse1}>Honda</Text>
                  <Text style={styles.userUse2}>Chưa có biển số xe</Text>
            </View>
            <View style={styles.content1}>
                    <Image source={require('./app/image/sample/honda.png')} style={{ width: 150, height: 100, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}/>
                     
            </View>
            <View style={styles.content2}>

                <View style={styles.pin}>
                    <View style={styles.pin1}>
                        <Image source={require('./app/image/pin.png')} style={{ width: 30, height: 30, marginTop: 15, marginLeft: 40 }} />
                        <Text style={{marginLeft:40, color: 'black'}}>Pin hộp đen        <Text >71%</Text></Text>
                        
                    </View>
                   
                    <View style={styles.pin2}>
                        <Image source={require('./app/image/pin.png')} style={{ width: 30, height: 30, marginLeft: 40 }} />
                        <Text style={{marginLeft:40, color: 'black'}}>Pin RFID              <Text >84%</Text></Text>
                        <Text style={{marginLeft:40, color: 'black'}}>KEY</Text>
                    </View>
                </View>
                <View style={styles.connect}>
                    
                    <View style={styles.connect1}>
                        <Image source={require('./app/image/connect.png')} style={{ width: 15, height: 15, marginTop: 20, marginLeft: 10 }} />
                       
                        <Text style={{ color: 'black',marginTop:10, marginLeft: 10}}>Kết nối hộp đen</Text>

                    </View>
                    
                    <View style={styles.connect2}>
                        <Image source={require('./app/image/protect.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
                        <Text style={{ color: 'black',marginTop:10, marginLeft: 10}}>Chống dắt</Text>
                    </View>
                </View>

          </View>
          <View style={styles.content3}>
            <Image source={require('./app/image/condition/red.png')} style={{tintColor: '#C1123B'}}/>
          </View>
        </View>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    'Trạng thái' : {
      screen:App,
      navigationOptions: {
        tabBarLabel: 'Trạng thái',
        tabBarIcon: ({tintColor}) => (
          <Image 
              source={require('./app/image/condition/red.png')}
              style={[{width: 22, height: 22},{tintColor}]}
          />
        ),
        tabBarOptions: {
          activeTintColor: '#C1123B',
          inactiveTintColor: 'gray'
        },
      }
    },
    'Bảo trì' : {
      screen:Maintenance,
      navigationOptions: {
        tabBarLabel: 'Bảo trì',
        tabBarIcon: ({tintColor}) => (
          <Image 
              source={require('./app/image/dashboard/red.png')}
              style={[{width: 22, height: 22},{tintColor}]}
          />
        ),
        tabBarOptions: {
          activeTintColor: '#C1123B',
          inactiveTintColor: 'gray'
        },
      }
    },
    'Cài đặt' : {
      screen:Setting,
      navigationOptions: {
        tabBarLabel: 'Cài đặt',
        tabBarIcon: ({tintColor}) => (
          <Image 
              source={require('./app/image/setting/red.png')}
              style={[{width: 22, height: 22}, {tintColor}]}
          />
        ),
        tabBarOptions: {
          activeTintColor: '#C1123B',
          inactiveTintColor: 'gray'
        }
      }
    }, 
  },{
    tabBarOptions: {
      activeTintColor: '#C1123B',
      inactiveTintColor: 'grey'
    }
} 
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.8,
    backgroundColor: '#C1123B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 8,
    flexDirection: 'column', 
  },
  content0: {
    flex: 1, 
    alignItems: 'center',
  },
  content1: {
    flex: 2, 
    alignItems: 'center',
  },
  content2: {
    flex: 3,
    flexDirection: 'row'
  },
  pin: {
    flex: 1,
    flexDirection: 'column',
    marginTop:15
  },
  pin1: {
    flex: 0.75,
  },
  pin2: {
    flex: 1,
  },
  connect: {
    flex: 1,
    flexDirection: 'column',
    marginTop:15
  },
  connect1: {
    flex: 0.75,
  },
  connect2: {
    flex: 0.75,
  },
  content3: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#C1123B',
    marginLeft: 140,
    marginBottom: 20
  },

  headerText: {
    fontSize: 15,
    color: 'white'
  },
  userUse: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
  userUse2: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold'
  },
  userUse1: {
    color: 'gray',
    fontSize: 13
  },

});
