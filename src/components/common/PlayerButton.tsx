import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
  Insets,
  View,
  Text,
} from 'react-native';

interface IProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isActive: Boolean;
  hitSlop?: Insets;
  title?: String;
  subTitle?: String;
  applyTransform: boolean;
}

class Button extends Component<IProps> {

  render() {
    const activeButtonStyling = this.props.isActive ? styles.activeButton : styles.nonActiveButton;
    const onPressAction = this.props.isActive ? this.props.onPress : () => { };
    const buttonTitleTextSize = this.props.isActive
    ? styles.activeTextTitleStyle : styles.nonActiveTextTitleStyle;
    const subtitleTextStyle = this.props.isActive
    ? styles.activeTextSubtitleStyle : styles.nonActiveTextSubtitleStyle;
    const transform = this.props.applyTransform ? { transform: [{ rotate: '180deg' }] } : { };
    return (
      <TouchableHighlight
        hitSlop={this.props.hitSlop}
        underlayColor={'#FFF'}
        onPress={onPressAction}
        style={[styles.buttonStyle, activeButtonStyling, this.props.style]}
      >
        {/* need to have tranform here and not in button, will crash Android */}
        <View style={transform}>
          <Text style={[buttonTitleTextSize, styles.textStyle]}>
            {this.props.title}
          </Text>

          <Text style={[subtitleTextStyle, styles.textStyle]}>
            {this.props.subTitle}
          </Text>
        </View>
      </TouchableHighlight>
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
  activeButton: {
    flex: 0.7,
  },
  nonActiveButton: {
    flex: 0.3,
  },
  activeTextTitleStyle: {
    fontSize: 60,
  },
  nonActiveTextTitleStyle: {
    fontSize: 42,
  },
  activeTextSubtitleStyle: {
    fontSize: 24,
  },
  nonActiveTextSubtitleStyle: {
    fontSize: 16,
  },
});

export { Button };
