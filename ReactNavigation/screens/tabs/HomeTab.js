import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';


export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='md-home' style={{color: tintColor}} />
        }
    }
    render() {
      return (
        <Container style={{backgroundColor:'#EEEEEE'}}>
            <Content>
                <Text>dfdfdfddf</Text>
            </Content>
        </Container>
      );
    }
  }