import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text, AppRegistry, Image } from 'react-native'
import ImageInfo from './ImageInfo'
import PickerInfo from './PickerInfo'


export default class Information extends Component {
    static navigationOptions = {
      title: '             Thông tin xe',
    }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.Top}>
                <ImageInfo style={{flex: 1}}/>
                <View style={styles.TextInput}>
                    <TextInput
                      style={styles.TextInput1}
                      placeholder="Tên chủ xe"
                    />
                    <TextInput
                      style={styles.TextInput1}
                      placeholder="Biển số xe"
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: 13}}>Kiểu xe</Text>
                    <PickerInfo/>
                      
                </View>
                
            </View>
            <View style={styles.Bottom}>
                  <View style={styles.left}>
                      <Image source={require('./../image/oil/red.png')} style={{ width: 30, height: 30, marginTop: 12, marginLeft: 10,tintColor: '#C1123B' }} />
                      <Image source={require('./../image/brake/red.png')} style={{ width: 30, height: 30, marginTop: 14, marginLeft: 10,tintColor: '#C1123B' }} />
                      <Image source={require('./../image/tire/red.png')} style={{ width: 30, height: 30, marginTop: 16, marginLeft: 10,tintColor: '#C1123B' }} />
                      <Image source={require('./../image/acquy/red.png')} style={{ width: 30, height: 30, marginTop: 16, marginLeft: 10,tintColor: '#C1123B' }} />
                      <Image source={require('./../image/check/red.png')} style={{ width: 30, height: 30, marginTop: 17, marginLeft: 10,tintColor: '#C1123B' }} />
                  </View>
                  <View style={styles.right}>
                      <TextInput
                          style={styles.TextInput2}
                          placeholder="Thay dầu"
                        />
                      <TextInput
                          style={styles.TextInput2}
                          placeholder="Bảo hành phanh"
                        />
                      <TextInput
                          style={styles.TextInput2}
                          placeholder="Thay lốp"
                        />
                      <TextInput
                          style={styles.TextInput2}
                          placeholder="Thay acquy"
                        />
                      <TextInput
                          style={styles.TextInput2}
                          placeholder="Kiểm tra toàn bộ"
                        />
                  </View>
            </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  Top: {
    flex: 4
  },
  
  Bottom: {
    flex: 3,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
   
  },
  TextInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput1: {
   fontSize: 14,
    width: 300,
    height: 35,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 10
  },
  TextInput2: {
   fontSize: 14,
    width: 280,
    height: 35,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 10,

  },

  left: {
   flex: 1,
   backgroundColor: 'white',
   marginTop: 10,
  },
  right: {
   flex: 5,
   backgroundColor: 'white',
   marginTop: 10,
  }

})


AppRegistry.registerComponent('Information', () => Information)