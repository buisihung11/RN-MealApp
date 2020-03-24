import React, { useState } from 'react';
import { AppLoading } from 'expo';
// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
import mealNavigator from './navigation/MealNavigator';

enableScreens(true);

const fetchFont = () =>
  Font.loadAsync({
    'ubuntu-regular': require('./assets/fonts/UbuntuMono-Regular.ttf'),
    'ubuntu-bold': require('./assets/fonts/UbuntuMono-Bold.ttf'),
    vt: require('./assets/fonts/VT323-Regular.ttf'),
  });

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setAppLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return mealNavigator;
};

export default App;

const styles = StyleSheet.create({});
