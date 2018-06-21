import React, {Component} from 'react'
import {View, Text} from 'react-native'


import {getDecks} from "../utils/helpers";
import Deck from './Deck'

export default class DeckView extends Component {
	// static propTypes = {
	// 	title: PropTypes.string.isRequired,
	// 	questions: PropTypes.array.isRequired
	// }

	state = {
		title: '',
		questions: []
	}


	render() {
		const decks = getDecks();
		return (
			<View>
				{Object.keys(decks).map((key) => (
					<Deck key={key} deck={decks[key]}/>
				))}
			</View>
		)
	}
}