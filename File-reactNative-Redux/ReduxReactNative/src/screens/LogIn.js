import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

//kết nối redux với react-native
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';


import colors from './../styles/colors/index'
import InputField from '../components/form/inputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/Notification'
import Loader from '../components/Loader'


class LogIn extends Component {
constructor(props){
    super(props);
    this.state = {
        formValid: true, // hiển thi mặc định màn hình ở trạng thái true
        validEmail: false,
        emailAddress: '',
        password: '',
        validPassword: false,
        loadingVisible: false
    }
}

 handleNextButton = () => {
     //mô phỏng một timeOut để hiển thị thông báo
    this.setState({ loadingVisible: true });
     
    const {navigate} = this.props.navigation;
    console.log(navigate);

    // xét email & password trong redux
    setTimeout(() => {
        const { emailAddress, password } = this.state;
        if(this.props.logIn(emailAddress, password)) {
            this.setState({ formValid : true, loadingVisible: false });
        }else{
                 this.setState({formValid : false, loadingVisible: false});
        }
   
    }, 2000);
 }

 handleCloseNotification = () => {
    this.setState({ formValid: true });
 }

 handleEmailChange = (email) => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if(!this.state.validEmail) {
        if(emailCheckRegex.test(email)) {
            this.setState({ validEmail: true });
        }
    } else {
        if(!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
        }
    }
    
    
}

 handlePasswordChange = (password) => {

    this.setState({ password });

     if(!this.state.validPassword) {
         if(password.length > 4) {
            //  password phải có ít nhất 4 ký tự
             this.setState ({ validPassword: true });
         }
     }else if(password <= 4) {
         this.setState({ validPassword : false });
     }
    
 }

 toggleNextButtonState = () => {
     const { validEmail, validPassword } = this.state;
    
     if (validEmail && validPassword) {
         return false;
     }
     return true;
 }

  render() {
      const {formValid, loadingVisible, validEmail, validPassword} = this.state;
      
      const showNotification =  formValid ? false : true;
      const background = formValid ? colors.green01 : colors.darkOrange;
      const notificationMarginTop = showNotification ? 10 : 0;

     
   
    return (
      <KeyboardAvoidingView 
        style={[{backgroundColor: background}, styles.wrapper]}
        behavior="padding"
      >
          <View style={styles.scrollViewWrapper}>
              <ScrollView style={styles.scrollView}>
                  <Text style={styles.loginHeader}>Log In</Text>
                    <InputField
                        labelText="EMAIL ADDRESS"
                        labelTextSize={14}
                        labelColor={colors.white}
                        textColor={colors.white}
                        borderBottomColor={colors.white}
                        inputType="email"
                        onChangeText={this.handleEmailChange}
                        showCheckmark={validEmail}
                        autoFocus={true}
                    />
                    <InputField
                        labelText="PASSWORD"
                        labelTextSize={14}
                        labelColor={colors.white}
                        textColor={colors.white}
                        borderBottomColor={colors.white}
                        inputType="password"
                        onChangeText={this.handlePasswordChange}
                        showCheckmark={validPassword}
                  
                    />
                  
              </ScrollView>
              <NextArrowButton 
                handleNextButton = {this.handleNextButton}
                disabled = {this.toggleNextButtonState()}
              />
              <View style={[styles.notificationWrapper, {marginTop: notificationMarginTop}]}>
                  <Notification 
                      showNotification={showNotification}
                      handleCloseNotification={this.handleCloseNotification}
                      type = "Error"
                      firstLine = "Those credentials don't look right."
                      secondLine = "Please try again."   
                  />
              </View>
          </View>

          <Loader 
              modalVisible={loadingVisible}
              animationType="fade"
          />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
       
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        flex: 1
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    loginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        zIndex:999
    }
});


const mapStateToprops = (state) => {
    return {
        loggedInStatus: state.loggedInStatus,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToprops, mapDispatchToProps)(LogIn);