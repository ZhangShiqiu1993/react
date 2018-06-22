import React, {Component} from 'react'
import {View, Text, ScrollView, FlatList} from 'react-native'


import {getDecks} from "../utils/helpers";
import Deck from './Deck'

export default class DeckListView extends Component {
	render() {
		const decks = getDecks();
		return (
			<View>
				<Text>decks</Text>
				<FlatList
					data={Object.values(decks)}
					renderItem={({item}) => <Deck {...item}/>}
					keyExtractor={(item, index) => item.title}
				/>
			</View>
		)
	}
}