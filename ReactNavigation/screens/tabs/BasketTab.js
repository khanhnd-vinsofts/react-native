import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';


export default class BasketTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='md-basket' style={{color: tintColor}} />
        }
    }
    render() {
      return (
        <Container style={{backgroundColor:'#EEEEEE'}}>
            <Content>
                <Text>This is my BasketTab</Text>
            </Content>
        </Container>
      );
    }
  }