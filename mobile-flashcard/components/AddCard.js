import React, {Component} from 'react'
import {Text, TextInput, KeyboardAvoidingView} from 'react-native'
import Button from "./Button";
import {connect} from 'react-redux'

class AddCard extends Component {
	state = {
		question: "",
		answer: ""
	}

	submit = () => {
		this.props.navigation.goBack()


	}

	handleQuestionInput = (question) => {
		this.setState({question})
	}

	handleAnswerInput = (answer) => {
		this.setState({answer})
	}

	render() {
		const {input} = this.state

		return (
			<KeyboardAvoidingView behavior={'padding'}>
				<Text>Question</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					value={input}
					onChangeText={this.handleQuestionInput}
				/>
				<Text>Answer</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					value={input}
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