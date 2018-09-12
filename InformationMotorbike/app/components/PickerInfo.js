import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

export default class PickerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pickerSelection: 'Kiểu xe'
    };
  }

  render() {
    return (
      <View style={styles.container}>
            <Picker

                selectedValue={this.state.pickerSelection}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection: itemValue})}>
                <Picker.Item label="Honda Wave Alpha" value="honda" />
                <Picker.Item label="Honda Art blade" value="honda" />
                <Picker.Item label="Honda SH" value="honda" />
                <Picker.Item label="Yamaha MT-03" value="yamaha" />
                <Picker.Item label="Yamaha TFX" value="yamaha" />
                <Picker.Item label="Yamaha EXciter 150cc" value="yamaha" />
                <Picker.Item label="Piaggio Medley ABS 150cc" value="piaggio" />
                <Picker.Item label="Piaggio Medley ABS 125cc" value="piaggio" />
                <Picker.Item label="Piaggio Liberty ABS 150cc" value="piaggio" />
                <Picker.Item label="Piaggio Liberty ABS 125cc" value="piaggio" />
            </Picker>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {   
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})