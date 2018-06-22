import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'


import {getDecks} from "../utils/helpers";

export default class DeckListView extends Component {
	renderItem = ({item}) => {
		return (
			<View>
				<TouchableOpacity onPress={() => {
					this.props.navigation.navigate(
						'Deck',
						{item: item}
					)
				}}>
					<Text>{item.title}</Text>
					<Text>{item.questions.length}</Text>
				</TouchableOpacity>
			</View>
		)
	}


	render() {
		const decks = getDecks();
		return (
			<View>
				<FlatList
					data={Object.values(decks)}
					renderItem={this.renderItem}
					keyExtractor={({title}) => title}
				/>
			</View>
		)
	}
}