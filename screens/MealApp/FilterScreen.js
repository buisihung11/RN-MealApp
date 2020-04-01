import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';

const FilterScreen = () => {
  const [filterValue, setFilterValue] = useState(false);

  return (
    <View style={styles.screen}>
      <Text>The Filter Screen</Text>
      <View style={styles.fitlerContainer}>
        <Text>Gulten</Text>
        <Switch
          value={filterValue}
          onValueChange={() => setFilterValue((prev) => !prev)}
        />
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fitlerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
