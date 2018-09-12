import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'
import flatListData from './../data/FlatListData'

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFoodName : '',
            newDescription: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    } 
    

    // lấy key ngâu nhiên cho sản phẩm được thêm mới
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
                }}>New food's information</Text>

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
                    onChangeText= {(text) => this.setState({ newFoodName : text})}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
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
                    onChangeText= {(text) => this.setState({ newDescription : text})}
                    placeholder="Enter new food's description"
                    value={this.state.newDescription}
                    
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
                        // check nếu chưa nhập vào Modal thì sẽ hiện thông báo nhập text 
                        if(this.state.newFoodName.length == 0 || this.state.newDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }

                        // Thêm mới sản phẩm vào trong FlatList
                        const newKey = this.genetateKey(24);
                        const newFood = {
                            key : newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFARN26QQ6qKFnKYFpEpZDR7W9-PuXap2gSmCFdAw3wt6toUTJhQ",
                            description: this.state.newDescription
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}