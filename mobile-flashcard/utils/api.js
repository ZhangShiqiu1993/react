import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'flashcards:storage'

const initState = {
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

export function getDecks () {
	return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
		return results === null ? setDummyData() : JSON.parse(results)
	})
}

function setDummyData () {
	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initState))
	return initState
}


export function saveDeck (deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
}

export function addCardToDeck(title, card) {
	return AsyncStorage.getItem(STORAGE_KEY)
		.then((results) => {
			let data = JSON.parse(results);
			data[title].questions.push(card)
			AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(data));
		})
}
