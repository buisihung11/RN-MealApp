import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import VTTExt from '../../components/Text/VTTExt';

import { CATEGORIES } from '../../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => (
    <View style={[styles.gridItem, { backgroundColor: itemData.item.color }]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      >
        <View>
          <VTTExt
            customStyle={{ textAlign: 'right', padding: 10, color: 'white' }}
          >
            {itemData.item.title}
          </VTTExt>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
    flexGrow: 1,
    margin: 15,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
