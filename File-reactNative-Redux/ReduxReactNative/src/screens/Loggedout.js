// xử lý màn hình login


import React, {Component} from 'react';
import colors from '../styles/colors';

import { StyleSheet, Text, View, Image, TouchableHighlight, } from 'react-native';
import RoundedButton from './../components/buttons/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class LoggedOut extends Component {


    onFacebookPress() {
        alert('xin chao khanh louis')
    }

    onCreateAccountPress(){
        alert('xin chao khanh louis')
    }

    onMoreOptionOnpress(){
        alert('xin chao khanh louis')
    }
  render() {
    return (
        <View style={styles.wrapper}>
           
            <View style={styles.welcomeWraper}>
                <Image 
                    source = {require('../img/logo1.png')}
                    style={[styles.logo, {tintColor:colors.white}]}
                />
                <Text style={styles.welcomeText}>Welcome to Vinsofts.</Text>
                <RoundedButton 
                    text = "Continue with Facebook"
                    textColor = {colors.green01}
                    background = {colors.white}
                    icon = {<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                    handleOnPress = {this.onFacebookPress}
                />

                <RoundedButton 
                    text = "Create Account"
                    textColor = {colors.white}
                    handleOnPress = {this.onCreateAccountPress}
                />


                <TouchableHighlight 
                    style={styles.moreOptionButton}
                    onPress={this.onMoreOptionOnpress}
                >
                    <Text style={styles.moreOptionButtonText}>More options</Text>
                </TouchableHighlight>

                <View style={styles.termsAndCondition}>
                    <Text style={styles.termsText}>
                        By tapping Continue, Create Account or More 
                    </Text>
                    <Text style={styles.termsText}>
                        option, I agree to Vinsofts
                    </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}> Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>,</Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Payments Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>,</Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}> Privacy Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, and</Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>.</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01, 
      
    },
    welcomeWraper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 50, 
        height: 50,
        marginTop: 50,
        marginLeft: 10,
        marginBottom: 40,
    
    },
    welcomeText: {
        fontSize: 25,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionButton: {
        marginTop: 10,
    },
    moreOptionButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600'
    },
    termsAndCondition: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '400'
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    }
})