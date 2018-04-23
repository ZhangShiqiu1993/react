import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import logger from 'redux-logger';
import History from './components/History';

export default class App extends React.Component {
  render() {
    const store = createStore(
      reducer,
      applyMiddleware(logger)
    );
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <View style={{height: 20}} />
          <History />
        </View>
      </Provider>
    )
  }
}
