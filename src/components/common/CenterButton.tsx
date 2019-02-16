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
            style={styles.imageStyle}
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
    backgroundColor: '#a1a3a3',
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 0,
    margin: 5,
  },
  imageStyle: {
    width: 60,
    height: 60,
  },
});

export { CenterButton };
