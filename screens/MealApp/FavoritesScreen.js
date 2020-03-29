import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../../components/MealList';
import MealItem from '../../components/MealItem';
import { MEALS } from '../../data/dummy-data';

const FavoriteScreen = ({ navigation }) => {
  const displayMeals = MEALS.filter((meal) => ['m1', 'm2'].includes(meal.id));

  const handleSelectMeal = (id) => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };

  const _renderMealItem = ({ item }) => (
    <MealItem item={item} onSelectMeal={() => handleSelectMeal(item.id)} />
  );
  return (
    <View style={styles.screen}>
      <MealList data={displayMeals} renderItem={_renderMealItem} />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
