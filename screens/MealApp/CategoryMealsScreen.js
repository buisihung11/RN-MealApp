import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

import { CATEGORIES, MEALS } from '../../data/dummy-data';
import VTTExt from '../../components/Text/VTTExt';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../../components/MealItem';
import MealList from '../../components/MealList';

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const _renderMealItem = ({ item }) => (
    <MealItem item={item} onSelectMeal={() => handleSelectMeal(item.id)} />
  );

  const handleSelectMeal = (id) => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };

  return (
    <View style={styles.screen}>
      <MealList data={displayMeals} renderItem={_renderMealItem} />
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
