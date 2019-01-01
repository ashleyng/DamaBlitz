import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface IProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isActive: Boolean;
}

class Button extends Component<IProps> {

  render() {
    const activeStyling = this.props.isActive ? styles.active : styles.notActive;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={[styles.buttonStyle, activeStyling, this.props.style]}
      >
        <Text style={styles.textStyle}> {this.props.children} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5,
  },
  textStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  active: {
    flex: 0.7,
  },
  notActive: {
    flex: 0.3,
  },
});

export { Button };
