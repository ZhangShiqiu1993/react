import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {connect } from 'react-redux'
import {AppLoading} from 'expo'
import {getDecks} from "../utils/api";
import {loadDecks} from "../actions";
import {styles} from "./styles";

class DeckList extends Component {
	state = {
		ready: false
	}

	renderItem = ({ item }) => {
		return (
			<View style={styles.display}>
				<TouchableOpacity onPress={() => {
					this.props.navigation.navigate(
						'Deck',
						{title: item.title}
					)
				}}>
					<Text style={styles.text}>{item.title}</Text>
					<Text style={styles.card}>{item.questions.length} card(s)</Text>
				</TouchableOpacity>
			</View>
		)
	}

	componentDidMount () {
		getDecks()
			.then((decks) => this.props.dispatch(loadDecks(decks)))
			.then(() => this.setState({ready: true}))
	}


	render() {
		const { decks } = this.props
		if (!this.state.ready) {
			return <AppLoading/>
		}

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

const mapStateToProps = (state) => {
	return {
		decks: state
	}
};

export default connect(mapStateToProps)(DeckList)