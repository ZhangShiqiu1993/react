import React, {Component} from 'react'
import {Text, TextInput, KeyboardAvoidingView} from 'react-native'
import {saveDeck} from "../utils/api";
import Button from "./Button";
import {connect} from 'react-redux'
import {addDeck} from "../actions";
import {styles} from "./styles";

class AddDeck extends Component {
	state = {
		title: ""
	}

	submit = () => {
		const {title} = this.state
		if (!title) {
			return alert("Please fill the title")
		}

		const deck = {
			title,
			questions: []
		}

		this.props.dispatch(addDeck({[title]: deck}))

		this.setState({title: ""})

		saveDeck({[title]: deck})

		// this.props.navigation.goBack()
		this.props.navigation.navigate(
			'Deck',
			{title}
		)
	}


	handleTextChange = (title) => {
		this.setState({title})
	}

	render() {
		const {title} = this.state

		return (
			<KeyboardAvoidingView behavior={'padding'}>
				<Text style={styles.inputText}>What is the title of your new deck?</Text>
				<TextInput
					style={styles.textInput}
					value={title}
					onChangeText={this.handleTextChange}
				/>
				<Button
					onPress={this.submit}
					text={"Create Deck"}
				/>
			</KeyboardAvoidingView>
		)
	}
}

export default connect()(AddDeck)