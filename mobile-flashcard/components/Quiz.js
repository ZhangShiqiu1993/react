import React, {Component} from 'react'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import {connect } from 'react-redux'
import Button from "./Button";
import {styles} from "./styles";
import {clearLocalNotification, setLocalNotification} from "../utils/helper";

class Quiz extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			title: `Quiz - ${navigation.state.params.title}`
		}
	}

	state = {
		correct: 0,
		total: 0,
		current: 0,
		showQuestion: true
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

	restart = () => {
		this.setState({
			correct: 0,
			current: 0,
			showQuestion: false
		})
	}

	toDeck = () => {
		this.props.navigation.navigate(
			'Deck',
			{title: this.props.navigation.state.params.title}
		)
	}

	render() {
		const {correct, current, total, showQuestion} = this.state
		if (current == total || total === 0) {
			clearLocalNotification().then(setLocalNotification);
			return (
				<View>
					<View style={styles.display}>
						<Text style={styles.text}>No more question for you</Text>
						<Text style={styles.text}>Your final score is {total === 0 ? 0 : Math.round(correct / total * 100)}</Text>
					</View>
					<Button
						text={"Restart Quiz"}
						onPress={this.restart}
					/>
					<Button
						text={"Back to Deck"}
						onPress={this.toDeck}
					/>
				</View>

			)
		}

		const {question, answer} = this.props.deck.questions[current]
		return (
			<View>
				<Text style={styles.reminder}>{total - current} questions remaining</Text>
				<TouchableWithoutFeedback
					onPress={this.showAnswer}
				>
					{showQuestion
						? <View style={styles.display}>
							<Text style={styles.text}>{question}</Text>
							<Text style={styles.showAnswer}>show answer</Text>
						</View>
						: <View style={styles.display}>
							<Text style={styles.text}>{answer}</Text>
							<Text style={styles.showAnswer}>back to question</Text>
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