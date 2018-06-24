import React, {Component} from 'react'
import {Text, TextInput, KeyboardAvoidingView} from 'react-native'
import {saveDeck} from "../utils/api";
import Button from "./Button";
import {connect} from 'react-redux'
import {addDeck} from "../actions";

class AddDeck extends Component {
	state = {
		title: ""
	}

	submit = () => {
		const {title} = this.state
		if (!title) {
			return
		}

		const deck = {
			title,
			questions: []
		}

		this.props.dispatch(addDeck({[title]: deck}))

		this.setState({title: ""})

		saveDeck({[title]: deck})

		this.props.navigation.goBack()

	}


	handleTextChange = (title) => {
		this.setState({title})
	}

	render() {
		const {title} = this.state

		return (
			<KeyboardAvoidingView behavior={'padding'}>
				<Text>What is the title of your new deck?</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					value={title}
					onChangeText={this.handleTextChange}
				/>
				<Button
					onPress={this.submit}
					text={"submit"}
				/>
			</KeyboardAvoidingView>
		)
	}
}

export default connect()(AddDeck)