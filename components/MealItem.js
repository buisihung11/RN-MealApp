import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import VTTExt from './Text/VTTExt';
import UbuntuText from './Text/UbuntuText';

const MealItem = ({ item, onSelectMeal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
              }}
              source={{ uri: item.imageUrl }}
            >
              <VTTExt customStyle={styles.title} numberOfLines={1}>
                {item.title}
              </VTTExt>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetail]}>
            <UbuntuText>{item.duration}</UbuntuText>
            <UbuntuText>{item.complexity.toUpperCase()}</UbuntuText>
            <UbuntuText>{item.affordability.toUpperCase()}</UbuntuText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    backgroundColor: '#f5f5f5',
    margin: 10,
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    height: '10%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
});
