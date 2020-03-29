import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MealList = ({ data, renderItem }) => (
  <FlatList style={{ width: '100%' }} data={data} renderItem={renderItem} />
);

export default MealList;

const styles = StyleSheet.create({});
