import React, { Component } from 'react';
import { AppRegistry, StatusBar, View } from 'react-native';
import Router from './components/router';

export default class MuscuApp extends Component {
  render() {
    return (
    	<View style={{flex: 1}}>
    		<StatusBar barStyle="light-content" />
      	<Router />
      </View>
    );
  }
}

AppRegistry.registerComponent('MuscuApp', () => MuscuApp);