import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { AntDesign, Feather } from '@expo/vector-icons';
import { H1, Toast } from 'native-base';
import { useMealFilter } from '../../context/MealContext';

const FilterSwitch = ({ value, onChange, label }) => {
  return (
    <View style={styles.fitlerContainer}>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
};

const SaveFilterButton = ({ onPress }) => (
  <View style={{ paddingHorizontal: 10 }}>
    <Feather onPress={onPress} name="save" color="black" size={25} />
  </View>
);

const FilterScreen = ({ navigation }) => {
  const [filterState, dispatch] = useMealFilter();

  console.log('filterState', filterState);

  const [isGlutenFree, setIsGlutenFree] = useState(filterState.isGlutenFree);
  const [isLactoseFree, setIsLactoseFree] = useState(filterState.isLactoseFree);
  const [isVegan, setIsVegan] = useState(filterState.isVegan);
  const [isVegetarian, setIsVegetarian] = useState(filterState.isVegetarian);

  const saveFilter = useCallback(() => {
    // dispatch to store
    dispatch({
      type: 'SET_FILTERS',
      filters: { isGlutenFree, isLactoseFree, isVegan, isVegetarian },
    });
    Toast.show({
      text: 'Filters were set',
      buttonText: 'Okay',
      type: 'success',
    });
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveFilterButton onPress={saveFilter} />,
    });
  }, [navigation, saveFilter]);

  return (
    <View style={styles.screen}>
      <H1>The Filter Screen</H1>
      <FilterSwitch
        label="Glutenn-Free"
        value={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" value={isVegan} onChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={setIsVegetarian}
      />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  fitlerContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
