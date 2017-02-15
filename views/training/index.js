import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import Button from 'apsl-react-native-button';
import { Actions } from 'react-native-router-flux';

export default class Programs extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});

		// Convert data
		var data = {};
		this.props.training.exercices.forEach(function(exercice) {
			data[exercice.name] = exercice.reps.map(function(rep, index) {
				return {
					rep: rep,
					weight: exercice.weights[index],
					rest: exercice.rest
				}
			});
		});

		this.state = {
			dataSource: ds.cloneWithRowsAndSections(data)
		}
	}

	_onPressRest(time) {
		Actions.timer({time: time});
	}

  render() {
    return (
      <ListView
      	style={{flex: 1}}
      	dataSource={this.state.dataSource}
      	renderSectionHeader={(sectionData, sectionName) => {
      		return (
      			<View style={styles.section}>
      				<Text style={styles.sectionTitle}>{sectionName}</Text>

      				<View style={styles.sectionLabels}>
      					<Text style={styles.sectionLabel}>Série</Text>
      					<Text style={styles.sectionLabel}>Répétitions</Text>
      					<Text style={styles.sectionLabel}>Poids</Text>
      					<Text style={styles.sectionLabel}>Pause</Text>
      				</View>
      			</View>
      		);
      	}}
      	renderRow={(rowData, sectionID, rowID, highlightRow) => {
      		return (
      			<View style={styles.row}>
      				<Text style={styles.rowCell}>{parseInt(rowID) + 1}</Text>
    					<Text style={styles.rowCell}>{rowData.rep}</Text>
    					<Text style={styles.rowCell}>{rowData.weight} kg</Text>
    					<View style={styles.restButtonContainer}>
	    					<Button onPress={() => this._onPressRest(rowData.rest)} style={styles.restButton} textStyle={styles.restButtonTitle}>{rowData.rest}</Button>
	    				</View>
      			</View>
      		);
      	}}
      />
    );
  }
}

const styles = StyleSheet.create({
	section: {
		
	},
	sectionTitle: {
		padding: 10,
		paddingTop: 25,
		fontWeight: "600",
		color: '#34495E'
	},
	sectionLabels: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#34495E',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 30
	},
	sectionLabel: {
		flex: 1,
		textAlign: 'center',
		color: '#F4F7F7'
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#AACFD0',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 45
	},
	rowCell: {
		flex: 1,
		textAlign: 'center'
	},
	restButtonContainer: {
		flex: 1
	},
	restButton: {
		backgroundColor: '#5DA0A2',
		borderWidth: 0,
		borderRadius: 5,
		marginBottom: 0,
		height: 35,
		marginLeft: 10,
		marginRight: 10,
	},
	restButtonTitle: {
		color: '#F4F7F7',
		fontSize: 14,
	}
});