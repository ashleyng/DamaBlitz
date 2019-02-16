import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Insets,
  View,
  Text,
  TextStyle,
} from 'react-native';

interface IProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isActive: Boolean;
  disabled?: boolean;
  hitSlop?: Insets;
  title?: String;
  subTitle?: String;
  applyTransform: boolean;
  textStyle?: StyleProp<TextStyle>;
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
      <TouchableOpacity
        hitSlop={this.props.hitSlop}
        activeOpacity={1.0}
        onPress={onPressAction}
        disabled={this.props.disabled}
        style={[styles.buttonStyle, activeButtonStyling, this.props.style]}
      >
        {/* need to have tranform here and not in button, will crash Android */}
        <View style={transform}>
          <Text style={[buttonTitleTextSize, styles.textStyle, this.props.textStyle]}>
            {this.props.title}
          </Text>

          <Text style={[subtitleTextStyle, styles.textStyle, this.props.textStyle]}>
            {this.props.subTitle}
          </Text>
        </View>
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
    borderWidth: 0,
    margin: 5,
  },
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
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
