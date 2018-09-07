/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';




 class Bink extends Component {
  constructor(props){
    super(props);
    this.state = {
      showText: true
    };
    var taskToDo = () => {
      this.setState(previousState => {
        return {
          showText : !previousState.showText
        };
      });
    };

    const timeTo = 1000;
    setInterval(taskToDo, timeTo);


  }


  render() {
    let textToDisplay = this.state.showText ? this.props.inputText : '';
    return (
      
          <Text>{textToDisplay}</Text>

    );
  }
}

export default class App extends Component {
  render(){
    return(
      <View>
          <Bink inputText="shgdhsgdhsgdhsgdhsd"/>
          <Bink inputText="shgdhsgdhsgdhsgdhsd"/>
          <Bink inputText="shgdhsgdhsgdhsgdhsd"/>
      </View>
    )
    
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
