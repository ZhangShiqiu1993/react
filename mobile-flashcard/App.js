import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import DeckView from './components/DeckView'

export default class App extends React.Component {
	render() {
		return (
			<View>
				<DeckView/>
			</View>
		);
	}
}

