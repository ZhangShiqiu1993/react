export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck (deck) {
	return {
		type: ADD_DECK,
		deck
	}
}

export function addCard(deck, card) {
	return {
		type: ADD_CARD,
		deck,
		card
	}

}