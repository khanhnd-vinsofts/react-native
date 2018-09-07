import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types'
import colors from '../styles/colors/index'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            positionValue: new Animated.Value(-60)
        }
    }

    animateNotification = (value) => {
        const { positionValue } = this.state;
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 300,
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeOutBack,
            }
        ).start();
    }

    closeNotification = () => {
        this.props.handleCloseNotification()
    }

  render() {
      const { type, firstLine, secondLine, showNotification } = this.props;
      showNotification ? this.animateNotification(0) : this.animateNotification(-60);
      const {positionValue} = this.state;
      
    return (
      <Animated.View style={[{marginBottom: positionValue} ,styles.wrapper]}>
         <View style={styles.notificationcontent}>
            <Text style={styles.errorText}> {type} </Text>
            <Text style={styles.errorMessage}> {firstLine} </Text>
            <Text style={styles.errorMessage}> {secondLine} </Text>
         </View>
         <TouchableOpacity 
            style={styles.closeButton}
            onPress={this.closeNotification}
        >
             <Icon 
                 name="times"
                 size = {20}
                 color = {colors.lightGray}

             />
         </TouchableOpacity>
      </Animated.View>
    );
  }
}


Notification.propTypes = {
    showNotification: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification: PropTypes.func,
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        padding: 10,
    },
    notificationcontent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    errorText: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2,
    },
    errorMessage: {
       
        marginBottom: 2,
        fontSize: 14
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})