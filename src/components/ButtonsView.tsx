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
import * as actions from '../actions';
import {
  PlayerId,
} from '../util/PlayerId';
import TimeFormatter from 'minutes-seconds-milliseconds';

interface IProps {
  activePlayer: PlayerId;
  p1Count: number;
  p2Count: number;
  p1Time: number;
  isRunning: boolean;
  changeActivePlayer: (arg0: PlayerId) => { };
  increaseP1Count: () => { };
  increaseP2Count: () => { };
  startPressed: (payload: Date) => { };
  timerInterval: (payload: Date) => { };
}

interface IState {
  activePlayer: PlayerId;
  p1Count: number;
  p2Count: number;
  timer: {
    p1Time: number;
    isRunning: boolean;
  };
}

class MainClass extends Component<IProps> {
  private runningInterval: number;

  // componentWillUpdate() {
  //   // TODO: Do better animations
  //   LayoutAnimation.easeInEaseOut();
  // }

  buttonPress = (currentActivePlayer: PlayerId) => {
    this.timerSetup();
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

  timerSetup = () => {
    if (this.props.isRunning) {
      clearInterval(this.runningInterval);
    } else {
      this.props.startPressed(new Date());

      this.runningInterval = setInterval(() => {
        this.props.timerInterval(new Date());
        if (!this.props.isRunning) {
          clearInterval(this.runningInterval);
        }
      }, 30);
    }
  }

  renderPlayerOneButton () {
    return (
      <Button
        style={{ transform: [{ rotate: '180deg' }] }}
        isActive={this.props.activePlayer === PlayerId.PLAYER_1}
        onPress={() => this.buttonPress(PlayerId.PLAYER_1)}
      >
          <Text style={[styles.textTitleStyle, styles.textStyle]}>
            Button1
          </Text>

          <Text style={[styles.textSubtitleStyle, styles.textStyle]}>
            Count {this.props.p1Count}
          </Text>
      </Button>
    );
  }

  renderPlayerTwoButton() {
    return (
      <Button
        isActive={this.props.activePlayer === PlayerId.PLAYER_2}
        onPress={() => this.buttonPress(PlayerId.PLAYER_2)}
      >
        <Text style={[styles.textTitleStyle, styles.textStyle]}>
          {TimeFormatter(this.props.p1Time)}
        </Text>

        <Text style={[styles.textSubtitleStyle, styles.textStyle]}>
          Count {this.props.p2Count}
        </Text>
      </Button>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderPlayerOneButton()}
        {this.renderPlayerTwoButton()}
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
  // console.log(state)
  return {
    activePlayer: state.activePlayer,
    p1Count: state.p1Count,
    p2Count: state.p2Count,
    p1Time: state.timer.p1Time,
    isRunning: state.timer.isRunning,
  };
};

export default connect(mapStateToProps, actions)(MainClass);
