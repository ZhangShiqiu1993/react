import React, {Component} from 'react'
import {View, Text} from 'react-native'


export default class DeckView extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.title}</Text>
				<Text></Text>
				<TouchableOpacity>Add Card</TouchableOpacity>
				<TouchableOpacity>Start Quiz</TouchableOpacity>
			</View>
		)
	}
}