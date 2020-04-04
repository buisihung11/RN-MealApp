import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

import { CATEGORIES, MEALS } from '../../data/dummy-data';
import VTTExt from '../../components/Text/VTTExt';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../../components/MealItem';
import MealList from '../../components/MealList';
import { useMeal } from '../../context/MealContext';

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId, categoryTitle } = route.params;
  const [{ meals }] = useMeal();
  const displayMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: categoryTitle,
      headerBackTitleStyle: {
        fontSize: 12,
      },
    });
  }, [navigation, categoryTitle]);

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
      {/* <Text>{JSON.stringify(filterState)}</Text> */}
      {displayMeals && displayMeals.length ? (
        <MealList data={displayMeals} renderItem={_renderMealItem} />
      ) : (
        <Text>No meal fit that filter</Text>
      )}
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
