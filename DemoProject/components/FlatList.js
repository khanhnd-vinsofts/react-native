import React, { Component } from 'react';
import {AppRegistry ,View, Text, FlatList, ImageBackground, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from './../data/FlatListData'
import FlatListItem from './FlatListItem'
import AddModalList from './AddModalList'
import EditModalList from './EditModal'
import { getFoodFromServer } from '../networking/Server';


const remote = 'https://i.pinimg.com/originals/e6/fb/bf/e6fbbfc391a441c98564d0bf6c458c47.jpg'
export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      deleteRowKey: null,
      foodsFromServer: [],
    });
  }

  //fetch api data
  componentDidMount() {
    this.refreshDataFromServer();
  }
  refreshDataFromServer = () => {
    getFoodFromServer().then((foods) => {
      this.setState({ foodsFromServer: foods });
    }).catch((error) => {
      this.setState({ foodsFromServer: [] });
    });
  }

  //thay đổi state của FlatList (delete sản phẩm))
  refreshFlatList = (activeKey) => {
    this.setState((prevState) => {
      return {
        deleteRowKey: activeKey
      }
    });
    this.refs.flatList.scrollToEnd();
  }

  _onPressAdd = () => {
      this.refs.addModal.showAddModal();
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={{uri: remote}}
      >
          <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
            
            <View style={{
              
              height: 64,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              opacity: 0.5
            }}>
                <TouchableHighlight
                  style={{marginRight: 10}}
                  underlayColor = 'tomato'
                  onPress= {this._onPressAdd}
                >
                    <Image 
                      style={{width: 35, height: 35}}
                      source = {require('./../images/add.png')}
                    />
                </TouchableHighlight>
            </View>
            
            
            <FlatList
              ref = {'flatList'}
              // data={flatListData}
              data = {this.state.foodsFromServer}
              keyExtractor={(index, item) => item.id}
              renderItem={({ item, index }) => {
                // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                return (
                  <FlatListItem item={item} index={index} parentFlatList={this}>

                  </FlatListItem>
                );
              }}
            >

            </FlatList>
              
            <AddModalList ref={'addModal'} parentFlatList={this}>

            </AddModalList>

            <EditModalList ref={'editModal'} parentFlatList={this}>

            </EditModalList>
          </View>
      </ImageBackground>
    );
  }
}


AppRegistry.registerComponent('BasicFlatList', () => BasicFlatList)