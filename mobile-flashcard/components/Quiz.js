import React, {Component} from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import {connect } from 'react-redux'
import Button from "./Button";


class Quiz extends Component {
	state = {
		correct: 0,
		total: 0,
		current: 0,
		showQuestion: false
	}

	componentDidMount() {
		const total = this.props.deck.questions.length
		this.setState({total})
	}


	showAnswer = () => {
		this.setState((state) => ({
			showQuestion: !state.showQuestion
		}))
	}

	incCorrect = () => {
		this.setState((state) => ({
			correct: state.correct + 1,
			current: state.current + 1
		}))
	}

	incIncorrect = () => {
		this.setState((state) => ({
			current: state.current + 1
		}))
	}

	render() {
		const {correct, current, total, showQuestion} = this.state
		if (current == total || total === 0) {
			return (
				<View>
					<Text>No more question for you</Text>
					<Text>Your final score is {total === 0 ? 0 : Math.round(correct / total * 100)}</Text>
				</View>
			)
		}

		const {question, answer} = this.props.deck.questions[current]
		return (
			<View>

				<TouchableWithoutFeedback
					onPress={this.showAnswer}
				>
					{showQuestion
						? <View>
							<Text>{question}</Text>
							<Text>show answer</Text>
						</View>
						: <View>
							<Text>{answer}</Text>
							<Text>back to question</Text>
						</View>
					}
				</TouchableWithoutFeedback>

				<Button
					onPress={this.incCorrect}
					text={"Correct"}
				/>
				<Button
					onPress={this.incIncorrect}
					text={"Incorrect"}
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

export default connect(mapStateToProps)(Quiz)