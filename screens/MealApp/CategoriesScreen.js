import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridItem from '../../components/CategoryGridItem';

const CategoriesScreen = ({ navigation }) => {
  const handlePressCategory = (id) => {
    navigation.navigate('CategoryMeals', {
      categoryId: id,
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
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
});
