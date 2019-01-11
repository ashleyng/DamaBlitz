import React, { Component } from 'react';
import {
  StyleSheet,
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
    const onPressAction = this.props.isActive ? this.props.onPress : () => { };
    return (
      <TouchableOpacity
        onPress={onPressAction}
        style={[styles.buttonStyle, activeStyling, this.props.style]}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5,
  },
  active: {
    flex: 0.7,
  },
  notActive: {
    flex: 0.3,
  },
});

export { Button };
