import {ADD_DECK, ADD_CARD, LOAD_DECKS} from "../actions/index";

function entries(state={}, action) {
	switch (action.type) {
		case LOAD_DECKS:
			return {
				...state,
				...action.decks
			}
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}
		case ADD_CARD:
			const deck = state[action.title]
			return {
				...state,
				[action.title]: {
					...deck,
					questions: deck.questions.concat(action.card)
				}
			}

		default:
			return state
	}
}



export default entries