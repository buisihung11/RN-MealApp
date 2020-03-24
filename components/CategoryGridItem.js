import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTTExt from './Text/VTTExt';

const CategoryGridItem = ({ item, onPress }) => (
  <View style={[styles.gridItem, { backgroundColor: item.color }]}>
    <TouchableOpacity style={{ height: '100%' }} onPress={onPress}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <VTTExt
          customStyle={{ textAlign: 'right', padding: 10, color: 'white' }}
        >
          {item.title}
        </VTTExt>
      </View>
    </TouchableOpacity>
  </View>
);

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
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
