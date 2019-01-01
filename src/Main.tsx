import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './components/common';

export default class MainClass extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Hello World</Text>
        <Button>
            Button1
        </Button>
      </View>
    );
  }
}
