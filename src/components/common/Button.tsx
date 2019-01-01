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
        <Text style={[styles.textTitleStyle, styles.textStyle]}>
          {this.props.children}
        </Text>

        <Text style={[styles.textSubtitleStyle, styles.textStyle]}>
          Subtitle
        </Text>
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
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textTitleStyle: {
    fontSize: 32,
  },
  textSubtitleStyle: {
    fontSize: 16,
  },
  active: {
    flex: 0.7,
  },
  notActive: {
    flex: 0.3,
  },
});

export { Button };
