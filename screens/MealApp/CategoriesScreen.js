import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CategoryGridItem from '../../components/CategoryGridItem';
import { useMeal } from '../../context/MealContext';

const CategoriesScreen = ({ navigation }) => {
  const [{ categories }] = useMeal();

  const handlePressCategory = (id) => {
    navigation.navigate('CategoryMeals', {
      categoryId: id,
      categoryTitle: categories.find((c) => c.id === id).title,
    });
  };

  const renderGridItem = ({ item }) => (
    <CategoryGridItem
      item={item}
      onPress={() => handlePressCategory(item.id)}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={categories}
        renderItem={renderGridItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
