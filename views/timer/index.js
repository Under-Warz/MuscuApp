import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';
import Button from 'apsl-react-native-button';
import { Actions } from 'react-native-router-flux';
import Sound from 'react-native-sound';

export default class Programs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timer: null,
			time: 0,
			progress: 0,
			sound: null
		};
	}

	componentDidMount() {
		//Sound.setCategory('Playback');
		var sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
			if (error) {

			}
			else {
				sound.setVolume(1);
				sound.setNumberOfLoops(1);

				this.setState({
					sound: sound
				});
			}
		});

		const timer = setInterval(() => {
			const time = this.state.time + 1;
			this.setState({
				timer: timer,
				time: time,
				progress: time / this.props.time
			});
		}, 1000);
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextState.time > this.props.time - 1) {
			clearInterval(this.state.timer);

			if (this.state.sound) {
				this.state.sound.play();
			}

			// Close
			setTimeout(function() {
				Actions.pop();
			}, 3000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);

		if (this.state.sound) {
			this.state.sound.release();
		}
	}

	_onPressCancel() {
		Actions.pop();
	}

  render() {
    return (
      <View style={styles.container}>
      	<StatusBar barStyle="dark-content" />
      	<Progress.Circle 
      		size={200} 
      		thickness={10} 
      		showsText={true} 
      		animated={false} 
      		borderColor="#5DA0A2"
      		color="#5DA0A2"
      		borderWidth={5}
      		progress={this.state.progress}
      		formatText={(progress) => {
      			return this.props.time - this.state.time + "s";
      		}} />

      		<Button onPress={this._onPressCancel} style={styles.cancelButton} textStyle={styles.cancelButtonText}>Annuler</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	cancelButton: {
		backgroundColor: '#AACFD0',
		marginTop: 100,
		marginLeft: 50,
		marginRight: 50,
		borderWidth: 0
	},
	cancelButtonText: {
		color: '#F4F7F7'
	}
});