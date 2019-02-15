import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, CenterButton } from './common';
import * as actions from '../actions';
import {
  PlayerId,
} from '../util/PlayerId';
import TimeFormatter from 'minutes-seconds-milliseconds';

interface IProps {
  activePlayer: PlayerId;
  p1Count: number;
  p2Count: number;
  gameRunning: boolean;
  p1Time: number;
  p2Time: number;
  changeActivePlayer: (playerId: PlayerId, currentTime: Date) => { };
  increaseP1Count: () => { };
  increaseP2Count: () => { };
  startTimer: (arg0: Date) => { };
  timerInterval: (arg0: Date) => { };
  startMatch: () => { };
  pauseMatch: () => { };
}

interface IState {
  playerCount: {
    p1Count: number;
    p2Count: number;
  }
  gameInfo: {
    activePlayer: PlayerId;
    gameRunning: boolean;
    p1Time: number;
    p2Time: number;
  };
}

class MainClass extends Component<IProps> {
  private runningInterval: number;

  componentWillUpdate() {
    // TODO: Do better animations
    LayoutAnimation.easeInEaseOut();
  }

  buttonPress = (currentActivePlayer: PlayerId) => {
    if (!this.props.gameRunning) {
      this.props.startMatch();
      this.props.startTimer(new Date());
      this.setupInterval();
      return;
    }
    this.timerSetup();
    switch (currentActivePlayer) {
      case PlayerId.PLAYER_1:
        this.props.changeActivePlayer(PlayerId.PLAYER_2, new Date());
        this.props.increaseP1Count();
        break;
      case PlayerId.PLAYER_2:
        this.props.changeActivePlayer(PlayerId.PLAYER_1, new Date());
        this.props.increaseP2Count();
        break;
      default:
        break;
    }
  }

  timerSetup = () => {
    if (!this.props.gameRunning) {
      clearInterval(this.runningInterval);
    } else {
      this.setupInterval();
    }
  }

  setupInterval = () => {
    this.runningInterval = setInterval(() => {
      this.props.timerInterval(new Date());
      // if (!this.props.gameRunning) {
      //   clearInterval(this.runningInterval);
      // }
    }, 60);
  }

  renderPlayerOneButton () {
    return (
      <Button
        style={{ transform: [{ rotate: '180deg' }], marginBottom: -42 }}
        isActive={this.props.activePlayer === PlayerId.PLAYER_1}
        onPress={() => this.buttonPress(PlayerId.PLAYER_1)}
      >
          <Text style={[styles.textTitleStyle, styles.textStyle]}>
          {TimeFormatter(this.props.p1Time)}
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
        style={{marginTop: -42 }}
        isActive={this.props.activePlayer === PlayerId.PLAYER_2}
        onPress={() => this.buttonPress(PlayerId.PLAYER_2)}
      >
        <Text style={[styles.textTitleStyle, styles.textStyle]}>
          {TimeFormatter(this.props.p2Time)}
        </Text>

        <Text style={[styles.textSubtitleStyle, styles.textStyle]}>
          Count {this.props.p2Count}
        </Text>
      </Button>
    );
  }

  renderCenterButton() {
    const imageUri = this.props.gameRunning
    ? require('../../assets/pause.png')
    : require('../../assets/reset.png');
    return (
      <View style={[styles.centerButtonStyle, { zIndex: 1000 }]}>
        <CenterButton
          onPress={() => {this.props.pauseMatch()}}>
          <Image
            source={imageUri}
          />
        </CenterButton>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderPlayerOneButton()}
        {this.renderCenterButton()}
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
  centerButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: IState) => {
  return {
    activePlayer: state.gameInfo.activePlayer,
    p1Count: state.playerCount.p1Count,
    p2Count: state.playerCount.p2Count,
    p1Time: state.gameInfo.p1Time,
    p2Time: state.gameInfo.p2Time,
    gameRunning: state.gameInfo.gameRunning,
  };
};

export default connect(mapStateToProps, actions)(MainClass);
