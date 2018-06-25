import React, {Component} from 'react'
import {Text, TextInput, KeyboardAvoidingView} from 'react-native'
import Button from "./Button";
import {connect} from 'react-redux'
import {addCard} from "../actions";
import {addCardToDeck} from "../utils/api";
import {styles} from "./styles";

class AddCard extends Component {
	state = {
		question: "",
		answer: ""
	}

	submit = () => {
		if (!this.state.question) {
			return alert("Please fill the question")
		}
		if (!this.state.answer ) {
			return alert("Please fill the answer")
		}

		const title = this.props.navigation.state.params.title
		const card = {
			...this.state
		}

		this.props.dispatch(addCard(title, card))

		this.setState({
			answer: "",
			question: ""
		})

		this.props.navigation.goBack()
		addCardToDeck(title, card)
	}


	handleQuestionInput = (question) => {
		this.setState({question})
	}

	handleAnswerInput = (answer) => {
		this.setState({answer})
	}

	render() {
		const {question, answer} = this.state

		return (
			<KeyboardAvoidingView behavior={'padding'}>
				<Text style={styles.inputText}>Question</Text>
				<TextInput
					style={styles.textInput}
					value={question}
					onChangeText={this.handleQuestionInput}
				/>
				<Text style={styles.inputText}>Answer</Text>
				<TextInput
					style={styles.textInput}
					value={answer}
					onChangeText={this.handleAnswerInput}
				/>
				<Button
					onPress={this.submit}
					text={"submit"}
				/>
			</KeyboardAvoidingView>
		)
	}
}

export default connect()(AddCard)