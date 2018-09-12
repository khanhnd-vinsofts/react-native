import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';


export default class PlanetTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='md-planet' style={{color: tintColor}} />
        }
    }
    render() {
      return (
        <Container style={{backgroundColor:'#EEEEEE'}}>
            <Content>
                <Text>This is my PlanetTab</Text>
            </Content>
        </Container>
      );
    }
  }