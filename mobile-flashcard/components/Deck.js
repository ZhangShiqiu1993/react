import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Deck extends Component {
	handlePress = () => {
		console.log("click")
	}

	render() {
		return (
			<TouchableOpacity onPress={this.handlePress}>
				<Text>{this.props.title}</Text>
				<Text>{this.props.questions.length}</Text>
			</TouchableOpacity>
		)
	}
}