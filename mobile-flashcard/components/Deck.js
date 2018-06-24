import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import Button from './Button'


class Deck extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			title: navigation.state.params.title
		}
	}

	handleAddCard = () => {
		this.props.navigation.navigate(
			'AddCard',
			{title: this.props.navigation.state.params.title}
		)
	}

	handleQuiz = () => {
		this.props.navigation.navigate(
			'Quiz',
			{title: this.props.navigation.state.params.title}
		)
	}

	render() {
		const { deck } = this.props
		return (
			<View>
				<Text>{deck.title}</Text>
				<Text>{deck.questions.length}</Text>
				<Button
					text={"Add Card"}
					onPress={this.handleAddCard}
				/>
				<Button
					text={"Start Quiz"}
					onPress={this.handleQuiz}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state, props) => {
	const title = props.navigation.state.params.title
	return {
		deck: state[title]
	}
}

export default connect(mapStateToProps)(Deck)