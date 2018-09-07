import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';


export default class BookTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='md-book' style={{color: tintColor}} />
        }
    }
    render() {
      return (
        <Container style={{backgroundColor:'#EEEEEE'}}>
            <Content>
                <Text>This is my BookTab</Text>
            </Content>
        </Container>
      );
    }
  }