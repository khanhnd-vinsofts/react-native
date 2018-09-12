import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'
import flatListData from './../data/FlatListData'

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodName : '',
            description: ''
        }
    }
    showEditModal = (editingName, flatListItem) => {
        console.log(`editingName = ${JSON.stringify(editingName)}`);
        this.setState({
            key: editingName.key,
            foodName: editingName.name,
            description: editingName.description,
            flatListItem: flatListItem
        });
        this.refs.myModal.open();
    } 
    
    genetateKey = (numberOfcharacters) => {
        return require('random-string')({length: numberOfcharacters});
    }

    render() {
        return (
            <Modal 
                ref={'myModal'}
                style={{
                    justifyContent : 'center',
                    borderRadius : Platform.OS === 'ios' ? 30 : 10,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280

                }}
                position = 'center'
                backdrop= {true}
                onClosed={() => {
                    // alert('Modal closed');
            }}
            >
                <Text style={{
                    fontSize:16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>food information</Text>

                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'grey',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText= {(text) => this.setState({ foodName : text})}
                    placeholder="Enter food name"
                    value={this.state.foodName}
                />

                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'grey',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText= {(text) => this.setState({ description : text})}
                    placeholder="Enter food description"
                    value={this.state.description}
                    
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle= {{
                        padding : 8,
                        marginLeft: 78,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'

                    }}
                    onPress = {() => {
                        if(this.state.foodName.length == 0 || this.state.description.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                       
                        // UPDATE SẢN PHẨM
                        //tìm ra phần tử cần update
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key)
                            if(foundIndex < 0) {
                                return;
                            }
                            flatListData[foundIndex].name = this.state.foodName;
                            flatListData[foundIndex].description = this.state.description;

                        // Refresh flatlist item
                            this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}