import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Deck extends Component {
	static navigationOptions = ({navigation}) => {
		const {title} = navigation.state.params.item
		return {
			title
		}
	}


	render() {
		const item = this.props.navigation.state.params.item
		return (
			<View>
				<Text>{item.title}</Text>
				<Text>{item.questions.length}</Text>
				<TouchableOpacity>Add Card</TouchableOpacity>
				<TouchableOpacity>Start Quiz</TouchableOpacity>
			</View>
		)
	}
}


export default Deck