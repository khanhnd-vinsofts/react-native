import React, { Component } from 'react'
import {AppRegistry ,Text, View, FlatList, StyleSheet, Image ,TouchableHighlight} from 'react-native'
import Information from './Information'
import { createStackNavigator } from 'react-navigation'

 class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 1,
          key: 'Thông tin xe',
        },
        {
          id: 2,
          key: 'Tìm thiết bị',

        },
        {
          id: 3,
          key: 'Cấu hình thiết bị',

        },
        {
          id: 4,
          key: 'Cấu hình điện thoại',

        },
      ],
      data: [
        {
          id: 5,
          key: 'Giới thiệu công ty'
        },
        {
          id: 6,
          key: 'Điều khoản sử dụng'
        },
      ],
      login: [
        {
          id: 7,
          key: 'Đăng nhập'
        },
      ],
    }
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.conatiner}>
        <View style={styles.header}>
          <Text style={styles.headerText} >Cài đặt</Text>
        </View>
       
        <View style={styles.layout1}>
          <View style={{marginRight: 10}}>
            <Image source={require('./../image/thongtinxe.png')} style={{ width: 30, height: 30, marginTop: 5, marginLeft: 10,tintColor: '#C1123B' }} />
            <Image source={require('./../image/timthietbi.png')} style={{ width: 30, height: 30, marginTop: 10, marginLeft: 10,tintColor: '#C1123B' }} />
            <Image source={require('./../image/cauhinh.png')} style={{ width: 30, height: 30, marginTop: 10, marginLeft: 10,tintColor: '#C1123B' }} />
            <Image source={require('./../image/cauhinh.png')} style={{ width: 30, height: 30, marginTop: 10, marginLeft: 10,tintColor: '#C1123B' }} />
          </View>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>
            <TouchableHighlight
              onPress= {() => navigate('Information', {key: item.key})}
            >
                <View style={styles.right}>
                  <Text style={{flex: 1, color: 'black', fontSize: 14}}>{item.key}</Text>
                  <Image source={require('./../image/arrow_right/green.png')} style={{ width: 20, height: 20, tintColor: 'grey' }} />
                </View>
              </TouchableHighlight>
            }
          />
        </View>

        <View style={styles.layout2}>
          <View style={{marginRight: 10}}>
            <Image source={require('./../image/thu.png')} style={{ width: 30, height: 30, marginLeft: 10,tintColor: '#C1123B', marginTop: 6 }} />
            <Image source={require('./../image/check/red.png')} style={{ width: 30, height: 30, marginTop: 5, marginLeft: 10,tintColor: '#C1123B' }} />

          </View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) =>
              <View style={styles.right}>
                <Text style={{flex: 1, color: 'black', fontSize: 14}}>{item.key}</Text>
                <Image source={require('./../image/arrow_right/green.png')} style={{ width: 20, height: 20, tintColor: 'grey' }} />
              </View>
            }
          />
        </View>
     
        <View style={styles.layout3}>
          <View style={{marginRight: 10}}>
            <Image source={require('./../image/dangnhap.png')} style={{ width: 30, height: 30, marginTop: 5, marginLeft: 10,tintColor: '#C1123B' }} />
          </View>
          <FlatList
            data={this.state.login}
            renderItem={({ item }) =>
              <View style={styles.right}>
                <Text style={{flex: 1, color: 'black', fontSize: 14}}>{item.key}</Text>
                <Image source={require('./../image/arrow_right/green.png')} style={{ width: 20, height: 20, tintColor: 'grey' }} />
              </View>
            }
          />
        </View>
      </View>
    )
  }
}


export default createStackNavigator({
  'Cài đặt': {
    screen: Setting, 
    navigationOptions:{
    header: null
  }},
  'Information' : {screen: Information}
});
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  header: {
    flex: 5,
    backgroundColor: '#C1123B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: 'white'
  },
  layout1: {
    flex: 14,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 10
  },
  layout2: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 10
  },
  layout3: {
    flex: 25,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 10
  },
  right: {
    borderBottomWidth: 1, padding: 10,
    borderColor: '#EEEEEE',
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('stackNavigation', () => Setting)
import React, { Component } from 'react';
import { View, Text } from 'react-native';

