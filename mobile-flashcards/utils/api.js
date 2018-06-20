import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'mobile:flashcards';

export function submitEntry({entry, key}) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry(key) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}

