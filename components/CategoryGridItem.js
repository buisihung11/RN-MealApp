import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import VTTExt from './Text/VTTExt';

const CategoryGridItem = ({ item, onPress }) => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }
  return (
    <View style={[styles.gridItem]}>
      <TouchCmp style={{ height: '100%' }} onPress={onPress}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: item.color,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            borderRadius: 10,
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <VTTExt
            customStyle={{
              fontSize: 30,
              textAlign: 'right',
              padding: 10,
              color: 'white',
            }}
          >
            {item.title}
          </VTTExt>
        </View>
      </TouchCmp>
    </View>
  );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
  },
});
