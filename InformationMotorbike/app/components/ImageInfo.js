import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper' 

export default class ImageInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Swiper 
                showsButtons = {true}
                showsPagination= {false}
            >
                <View style={styles.slide1}>
                    <Image source={require('./../image/sample/honda.png')} style={{width: 130, height: 85}}/>
                </View>
                <View style={styles.slide2}>
                    <Image source={require('./../image/sample/cup50.png')} style={{width: 130, height: 85}}/>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('./../image/sample/1000cc.png')} style={{width: 130, height: 85}}/>
                </View>
                <View style={styles.slide4}>
                    <Image source={require('./../image/sample/125cc.png')} style={{width: 130, height: 85}}/>
                </View>
                <View style={styles.slide5}>
                    <Image source={require('./../image/sample/pcx.png')} style={{width: 130, height: 85}}/>
                </View>
                <View style={styles.slide6}>
                    <Image source={require('./../image/sample/vespa.png')} style={{width: 130, height: 85}}/>
                </View>
            </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      slide5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      slide6: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
})