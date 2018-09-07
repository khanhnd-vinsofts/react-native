import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';


export default class CartTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='md-cart' style={{color: tintColor}} />
        }
    }
    render() {
      return (
        <Container style={{backgroundColor:'#EEEEEE'}}>
            <Content>
                <Text>This is my CartTab</Text>
            </Content>
        </Container>
      );
    }
  }