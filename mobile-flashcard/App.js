import React from 'react';
import { View} from 'react-native';
import {Provider} from 'react-redux'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {lightBlue} from "./utils/colors";
import configureStore from './store/configureStore'
import {MainNavigator} from "./components/Navigator";
import MyStatusBar from './components/MyStatusBar'


export default class App extends React.Component {
	render() {
		return (
			<Provider store={configureStore()}>
				<View style={{flex:1}}>
					<MyStatusBar backgroundColor={lightBlue} barStyle="light-content" />
					<MainNavigator />
				</View>
			</Provider>

		);
	}
}

