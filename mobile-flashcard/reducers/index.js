import {ADD_DECK, ADD_CARD} from "../actions/index";

export const initState = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces'
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event'
			}
		]
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.'
			}
		]
	}
}

function entries(state=initState, action) {
	switch (action.type) {
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}
		case ADD_CARD:
			return state.map((deck) => {
				if (deck.title === action.deck.title) {
					return {
						...deck,
						questions: deck.questions.concat(action.card)
					};
				} else {
					return deck;
				}
			});
		default:
			return state
	}
}



export default entries