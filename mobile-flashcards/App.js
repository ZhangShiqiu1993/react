import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import AddDeck from './components/AddDeck';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { setLocalNotification } from "./utils/helpers";
import { purple, white } from './utils/colors';



function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

//
// const Tabs = TabNavigator({
//   History: {
//     screen: DeckMain,
//     navigationOptions: {
//       tabBarLabel: 'Decks',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     },
//   },
//   AddEntry: {
//     screen: AddEntry,
//     navigationOptions: {
//       tabBarLabel: 'Add Deck',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     },
//   },
// }, {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// });
//
//
// const MainNavigator =  StackNavigator({
//   Home: {
//     screen: Tabs,
//     navigationOptions: {
//       title: "Flash Cards",
//       headerTintColor: "white",
//       headerStyle: {
//         backgroundColor: "purple"
//
//       }
//     }
//   },
//   DeckDetail: {
//     screen: DeckDetail,
//     navigationOptions: {
//       headerTintColor: "white",
//       headerStyle: {
//         backgroundColor: "purple"
//
//       }
//     }
//   },
//   AddQuestion: {
//     screen: AddQuestion,
//     navigationOptions: {
//       headerTintColor: "white",
//       headerStyle: {
//         backgroundColor: "purple"
//
//       }
//     }
//   },
//   QuizMain: {
//     screen: QuizMain,
//     navigationOptions: {
//       headerTintColor: "white",
//       headerStyle: {
//         backgroundColor: "purple"
//
//       }
//     }
//   }
// });

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification();
  }
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MyStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
};
