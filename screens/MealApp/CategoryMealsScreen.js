import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

import { CATEGORIES } from '../../data/dummy-data';

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <CustomButton onPress={() => navigation.goBack()}>Go back</CustomButton>
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
