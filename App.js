import React, { useState } from 'react';
import { AppLoading } from 'expo';
// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
import MealNavigator from './navigation/MealNavigator';
import { MealProvider } from './context/MealContext';

enableScreens(true);

const fetchFont = () =>
  Font.loadAsync({
    'ubuntu-regular': require('./assets/fonts/UbuntuMono-Regular.ttf'),
    'ubuntu-bold': require('./assets/fonts/UbuntuMono-Bold.ttf'),
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    vt: require('./assets/fonts/VT323-Regular.ttf'),
  });

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          console.log('Loadded font');
          setAppLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Container>
      <MealProvider>
        <MealNavigator />
      </MealProvider>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
