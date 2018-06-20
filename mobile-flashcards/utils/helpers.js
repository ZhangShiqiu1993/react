import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { red, orange, blue, lightPurp, pink, white } from "./colors";
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'Fitness:notifications';

export function getDailyReminderValue () {
  return {
    today: "👋 Don't forget to log your data today!"
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});


export function timeToString (time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Log your stats!',
    body: "👋 don't forget to log your stats for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);
              
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );
              
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

const decks = {
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
};

export function getDecks() {
  return decks;
//return all of the decks along with their titles, questions, and answers.
}

export function getDeck(title) {
//take in a single id argument and return the deck associated with that id.
//   const info = {
//     title: 'deck1',
//     questions: [
//       {
//         question: 'q1',
//         answer: 'a1'
//       },
//       {
//         question: 'q2',
//         answer: 'a2'
//       }
//     ]
//   };
  
  return decks[title];
}

export function questionIcon() {
  return (
    <View>
      <FontAwesome
        name={'question-circle'}
        color={'black'}
        size={35}
      />
    </View>
  )
}

function AnswerIcon() {
  return (
    <View>
      <MaterialIcons
        name={'question-answer'}
        color={'black'}
        size={35}
      />
    </View>
  )
}

function saveDeckTitle(title) {
  // take in a single title argument and add it to the decks.
}

function addCardToDeck(title, card) {
  // take in two arguments, title and card,
  // and will add the card to the list of questions for the deck with the associated title.
}

