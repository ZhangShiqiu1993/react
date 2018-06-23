import React, {Component} from 'react'
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native'
import {submitEntry, removeEntry} from "../utils/api";
import SubmitBtn from "./SubmitBtn";
import {connect} from 'react-redux'
import {addEntry} from "../actions/index";

class AddDeck extends Component {
	state = {
		input: ""
	}

	submit = () => {
		const {input} = this.state
		if (!input) {
			return
		}

		const title = input
		const entry = {
			title,
			questions: []
		}

		this.props.dispatch(addEntry({
			[title]: entry
		}))

		this.setState({
			input: ""
		})

		submitEntry(title, entry)



	}

	handleTextChange = (input) => {
		this.setState({input})
	}

	render() {
		const {input} = this.state

		return (
			<KeyboardAvoidingView behavior={'padding'}>
				<Text>What is the title of your new deck?</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					value={input}
					onChangeText={this.handleTextChange}
				/>
				<SubmitBtn
					onPress={this.submit}
				/>
			</KeyboardAvoidingView>
		)
	}
}

export default connect()(AddDeck)