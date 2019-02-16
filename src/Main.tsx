import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ButtonsView from './components/ButtonsView';
import { StatusBar } from 'react-native';

export default class MainClass extends React.Component {
  public render() {
    return (
      <Provider store={createStore(reducers)}>
        <StatusBar hidden={true} />
        <ButtonsView />
      </Provider>
    );
  }
}
