import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Platform} from 'react-native';
import {getDeck, getDecks, questionIcon} from "../utils/helpers";
import {addEntry} from "../actions";

// function SubmitBtn ({ onPress }) {
//   return (
//     <TouchableOpacity
//       style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
//       onPress = {onPress}
//     >
//       <Text>SUBMIT</Text>
//     </TouchableOpacity>
//   )
// }

function SubmitButton ({onPress}) {
  return (
    <TouchableOpacity
      onPress = {onPress}
    >
      <Text>submit</Text>
    </TouchableOpacity>
  )
}


export default class AddDeck extends Component{
  state = {
    title: '',
    questions: []
  };
  
  addQuestions = (question, answer) => {
    this.setState(state => ({
      questions : state.questions.conacat({question, answer})
    }))
  };
  
  changeTitle = (title) => {
    this.setState({title});
  };
  
  submit = () => {
    console.log("submit")
    // this.props.dispatch(addEntry)
  };
  
  render() {
    const {title, questions} = getDeck("React");
    return (
      <View>
        <Text>title</Text>
        <Text>{questions.length}</Text>
        <SubmitButton onPress={this.submit}/>
      </View>
    )
  }
}
