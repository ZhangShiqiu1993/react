import React, {Component} from 'react';
import { View} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {lightBlue} from "./utils/colors";
import {MainNavigator} from "./components/Navigator";
import MyStatusBar from './components/MyStatusBar'
import reducer from './reducers'
import {setLocalNotification } from "./utils/helper";

export default class App extends Component {
	componentDidMount() {
		setLocalNotification()
	}
	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{flex:1}}>
					<MyStatusBar backgroundColor={lightBlue} barStyle="light-content" />
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}

