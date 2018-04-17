import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import logger from 'redux-logger';

export default class App extends React.Component {
  render() {
    const store = createStore(
      reducer,
      applyMiddleware(logger)
    );
    return (
      <Provider store={store}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}
