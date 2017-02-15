import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import GridView from 'react-native-gridview';
import { Actions } from 'react-native-router-flux';
import data from '../../data';

export default class Programs extends Component {
	constructor(props) {
		super(props);
	}

	_onPressCell(program) {
		if (program.trainings !== undefined) {
			Actions.program({title: program.name, program: program});
		}
	}

  render() {
    return (
      <GridView
      	data={data}
      	itemsPerRow={1}
      	itemStyle={{marginTop: 2}}
      	renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
      		return (
      			<TouchableHighlight onPress={() => this._onPressCell(item) }>
      				<View style={styles.cell}>
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
		height: 125,
		margin: 0
	},
	cellTitle: {
		textAlign: 'center',
		color: '#F4F7F7',
		fontSize: 20,
		fontWeight: "500"
	}
});