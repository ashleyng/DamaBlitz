import React, { Component } from 'react';
import { 
  View,
  StatusBar,
  Text,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import {
  changeActivePlayer,
  increaseP1Count,
  increaseP2Count,
} from '../actions';
import {
  PlayerId,
} from '../util/PlayerId';

interface IProps {
  activePlayer: PlayerId;
  changeActivePlayer: (arg0: PlayerId) => { };
  increaseP1Count: () => { };
  increaseP2Count: () => { };
}

interface IState {
  activePlayer: PlayerId;
}

class MainClass extends Component<IProps> {

  componentWillUpdate() {
    // TODO: Do better animations
    LayoutAnimation.easeInEaseOut();
  }

  buttonPress = (currentActivePlayer: PlayerId) => {
    switch (currentActivePlayer) {
      case PlayerId.PLAYER_1:
        this.props.changeActivePlayer(PlayerId.PLAYER_2);
        this.props.increaseP1Count();
        break;
      case PlayerId.PLAYER_2:
        this.props.changeActivePlayer(PlayerId.PLAYER_1);
        this.props.increaseP2Count();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Button
          style={{ transform: [{ rotate: '180deg' }] }}
          isActive={this.props.activePlayer === PlayerId.PLAYER_1}
          onPress={() => this.buttonPress(PlayerId.PLAYER_1)}
        >
            <Text style={[styles.textTitleStyle, styles.textStyle]}>
              Button1
            </Text>

            <Text style={[styles.textSubtitleStyle, styles.textStyle]}>
              Subtitle
            </Text>
        </Button>

        <Button
          isActive={this.props.activePlayer === PlayerId.PLAYER_2}
          onPress={() => this.buttonPress(PlayerId.PLAYER_2)}
        >
          <Text style={[styles.textTitleStyle, styles.textStyle]}>
            Button2
          </Text>

          <Text style={[styles.textSubtitleStyle, styles.textStyle]}>
            Subtitle
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

const mapStateToProps = (state: IState) => {
  return { activePlayer: state.activePlayer };
};

export default connect(mapStateToProps, {
  changeActivePlayer,
  increaseP1Count,
  increaseP2Count,
})(MainClass);
