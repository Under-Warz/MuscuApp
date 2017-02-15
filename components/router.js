import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Programs from '../views/programs';
import Program from '../views/program';
import Training from '../views/training';
import Timer from '../views/timer';

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
          <Scene key="programs" component={Programs} title="Programmes" initial={true} sceneStyle={styles.scene} />
          <Scene key="program" component={Program} sceneStyle={styles.scene} />
          <Scene key="training" component={Training} title="Séance" sceneStyle={styles.scene} />
          <Scene key="timer" component={Timer} hideNavBar={true} direction="vertical" panHandlers={null} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#F4F7F7'
  },
  navBar: {
    backgroundColor: '#34495E'
  },
  navBarTitle: {
    color: '#F4F7F7'
  }
});