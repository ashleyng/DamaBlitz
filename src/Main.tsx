import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Button } from './components/common';

export default class MainClass extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Button>
            Button1
        </Button>

        <Button>
          Button2
        </Button>
      </View>
    );
  }
}
