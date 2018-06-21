import React, {Component} from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'

export default class Deck extends Component {
	// static propTypes = {
	// 	title: PropTypes.string.isRequired,
	// 	questions: PropTypes.array.isRequired
	// }

	state = {
		title: '',
		questions: []
	}


	render() {
		return (
			<View>
				<Text>{this.props.deck.title}</Text>
				<Text>{this.props.deck.questions.length}</Text>
			</View>
		)
	}
}