import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import AddDeck from './components/AddDeck'

export default class App extends React.Component {
	render() {
		return (
			<View>
				<AddDeck/>
			</View>
		);
	}
}

