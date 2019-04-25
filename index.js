import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import LoginScreen from './Login/LoginScreen.view';

import {name as appName} from './app.json';

import configureStore from './store';
const store = configureStore();

class LoginScreenApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => LoginScreenApp);
