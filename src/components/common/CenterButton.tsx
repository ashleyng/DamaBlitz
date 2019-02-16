import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';

interface IProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  imgageUri: any;
}

class CenterButton extends Component<IProps> {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.buttonStyle, this.props.style]}
      >
        <Image
            source={this.props.imgageUri}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5,
  },
});

export { CenterButton };
