import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './components/router';

export default class MuscuApp extends Component {
  render() {
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('MuscuApp', () => MuscuApp);