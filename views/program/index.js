import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import GridView from 'react-native-gridview';
import { Actions } from 'react-native-router-flux';

export default class Programs extends Component {
	constructor(props) {
		super(props);
	}

	_onPressCell(training) {
		if (training.exercices !== undefined) {
			Actions.training({title: training.name, training: training});
		}
	}

  render() {
    return (
      <GridView
      	data={this.props.program.trainings}
      	itemsPerRow={2}
      	itemStyle={{marginTop: 2, marginRight: 1, marginLeft: 1}}
      	renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
      		return (
      			<TouchableHighlight onPress={() => this._onPressCell(item)}>
      				<View style={styles.cell}>
      					<Text style={styles.cellDay}>Jour {itemID + 1}</Text>
      					<Text style={styles.cellTitle}>{item.name}</Text>
      				</View>
      			</TouchableHighlight>
      		);
      	}}
      	style={{flex: 1}} 
      	contentContainerStyle={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
	list: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	cell: {
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#5DA0A2',
		height: 100,
		margin: 0
	},
	cellDay: {
		fontSize: 16,
		fontWeight: "700",
		textAlign: 'center',
		marginBottom: 15,
		color: '#F4F7F7'
	},
	cellTitle: {
		textAlign: 'center',
		color: '#F4F7F7',
		fontSize: 14
	}
});