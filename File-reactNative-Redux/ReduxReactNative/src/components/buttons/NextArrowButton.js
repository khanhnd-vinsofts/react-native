// file Button Login 

import React, { Component } from 'react';
import {  TouchableHighlight,StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors/index'


export default class NextArrowButton extends Component {
    render(){
        const { disabled, handleNextButton  } = this.props;
        const opacityStyle = disabled ? 0.2 : 0.6;
        return (
            <View style={styles.buttonWrapper}>
                <TouchableHighlight
                    style={[{ opacity: opacityStyle }, styles.button]}
                    onPress={handleNextButton}
                    disabled={disabled}
                >
                    <Icon 
                        name="angle-right"
                        color={colors.green01}
                        size={32}
                        style={styles.icon}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
}

const styles = StyleSheet.create({
    buttonWrapper: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 20,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: colors.white,
    }
})