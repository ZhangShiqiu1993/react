import React from 'react';
import AddDeck from "./AddDeck";
import {lightBlue, purple, white} from "../utils/colors";
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckList from "./DeckList";
import {Platform} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

export const Tabs = createBottomTabNavigator({
	DeckView: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: "Deck",
			tabBarIcon: ({tintColor}) => <FontAwesome name={'home'} size={30} color={tintColor} />
		}
	},
	NewDeckView: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: "add new deck",
			tabBarIcon: ({tintColor}) => <FontAwesome name={'dashboard'} size={30} color={tintColor} />
		}
	}
},{
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: Platform.OS === 'ios' ? purple : white,
		style: {
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? white : purple,
			shadowColor: 'rgba(0, 0, 0, 0.24)',
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}
})


export const MainNavigator = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			title: "FlashCards",
		}
	},
	Deck: {
		screen: Deck,
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: lightBlue
			}
		}
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			title: "Add Card",
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: lightBlue
			}
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: lightBlue
			}
		}
	}
});

