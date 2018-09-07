import React, { Component } from 'react';
import { AppRegistry,View, Text, FlatList, StyleSheet, Image, Alert, Platform, 
    TouchableHighlight, RefreshControl, TextInput } from 'react-native';

    import {addNewTask} from '../actions';


export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newTaskName: ''
    };
  }

  render() {
    return (
      <View style={{
          backgroundColor: 'tomato',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: 64
      }}>
        ><TextInput 
            style={{
                height: 40,
                width: 200,
                margin: 10,
                padding: 10,
                borderColor: 'white',
                borderWidth: 1,
                color: 'white'
            }}
            keyboardType= 'default'
            placeholderTextColor = 'white'
            placeholder = 'Enter'
            autoCapitalize = 'none'
            onChangeText={
                (text) => {
                    this.setState({ newTaskName: text });
                }
            }
        />
        <TouchableHighlight
        style={{marginRight: 10,}}
        underlayColor= 'blue'
        onPress={(event) => {
            this.props.onClickAdd(this.state.newTaskName);
        }}
        >
            <Image 
                style={{width: 35, height: 35}}
                source ={require('./../icons/Add.png')}
            />
        </TouchableHighlight>
      </View>
    );
  }
}
