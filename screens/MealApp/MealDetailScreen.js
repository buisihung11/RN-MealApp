import React, { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../../data/dummy-data';

const MealDetailScreen = ({ navigation, route }) => {
  const { mealId } = route.params;

  const mealDetail = MEALS.find((m) => m.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetail.title,
      headerRight: () => (
        <AntDesign
          size={25}
          name="hearto"
          onPress={() => {
            console.log('Clicked');
          }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Text>{mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
