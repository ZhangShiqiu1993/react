import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import {createBottomTabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckListView from './components/DeckListView'
import NewDeckView from './components/NewDeckView'
import {purple, white, blue} from "./utils/colors";
import { Constants } from 'expo';

function MyStatusBar ({backgroundColor, ...props}) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}


const Tabs = createBottomTabNavigator({
	DeckView: {
		screen: DeckListView,
		navigationOptions: {
			tabBarLabel: "Deck",
			tabBarIcon: ({tintColor}) => <FontAwesome name={'home'} size={30} color={tintColor} />
		}
	},
	NewDeckView: {
		screen: NewDeckView,
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

// const MainNavigator = StackNavigator({
// 	Home: {
// 		screen: Tabs,
// 	},
// });


export default class App extends React.Component {
	render() {
		return (
			<View style={{flex:1}}>
				<MyStatusBar backgroundColor={blue} barStyle="light-content" />
				<Tabs/>
			</View>
		);
	}
}

