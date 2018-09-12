import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import flatListData from './../data/FlatListData'
import Swipeout from 'react-native-swipeout';



export default class FlatListItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeRowKey: null,
        numberOfRefresh: 0
      }
    }

    //thay đổi State của flatListItem trong phần EditModal
    refreshFlatListItem = () => {
      this.setState((prevState) => {
          return {
            //khi có sự thay đổi update sẽ cộng thêm 1 đơn vị
              numberOfRefresh: prevState.numberOfRefresh + 1
          };
      });
    }

    render() {
  
      const swipeSettings = {
        autoClose: true,
  
        onClose: (secId, rowId, direction) => {
          if (this.state.activeRowKey != null) {
                this.setState({ activeRowKey: null });
          }
        },
  
        onOpen: (secId, rowId, direction) => {
           this.setState({ activeRowKey: this.props.item.key });
        },
  
        right: [
          {
              onPress: () => {
                // alert('are you akey')
                this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
              },
              text: 'Edit', type: 'default'
          },
          {
            onPress: () => {
              const deletingRow = this.state.activeRowKey;
              Alert.alert(
                'Alert',
                'Are you sure you want to delete ?',
                [
                  { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
  
                  {
                    text: 'Yes', onPress: () => {
                      flatListData.splice(this.props.index, 1);
  
                      //Refresh FlatList
                      this.props.parentFlatList.refreshFlatList(deletingRow);
                    }
                  },
  
                ],
  
                { cancelable: true }
              );
            },
  
            text: 'Delete', type: 'delete'
          }
        ],
  
        rowId: this.props.index,
  
        sectionid: 1
      };
  
  
      return (
        <Swipeout {...swipeSettings}>
            <View style={{
              flex: 1,
              flexDirection: 'column'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'mediumseagreen'
                  // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    >
                    </Image>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                      }}>
                        <Text style={styles.FlatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.FlatListItem}>{this.props.item.description}</Text>
                        <Text style={styles.FlatListItem}>{this.props.item.price}</Text>
                    </View>
  
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: 'grey'
                }}>
  
                </View>
            </View>
        </Swipeout>
  
      );
    }
  }
  
  const styles = StyleSheet.create({
    FlatListItem: {
      color: 'white',
      padding: 5,
      fontSize: 14,
      fontFamily: 'Arial, Helvetica, sans-serif',
    }
  })