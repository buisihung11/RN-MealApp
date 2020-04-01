import React, { useLayoutEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MEALS } from '../../data/dummy-data';
import UbuntuText from '../../components/Text/UbuntuText';
import { ListItem, CheckBox, Body } from 'native-base';

const MealDetailScreen = ({ navigation, route, item }) => {
  const { mealId } = route.params;

  const mealDetail = MEALS.find((m) => m.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetail.title,
      headerRight: () => (
        <AntDesign
          size={25}
          name="hearto"
          onPress={() => {
            console.log('Clicked');
          }}
        />
      ),
    });
  }, [navigation]);

  const renderIngredientsTable = () => (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <UbuntuText isBold customStyles={{ fontSize: 20 }}>
            Name
          </UbuntuText>
        </DataTable.Title>
        <DataTable.Title numeric>
          <UbuntuText isBold customStyles={{ fontSize: 20 }}>
            Fat
          </UbuntuText>
        </DataTable.Title>
      </DataTable.Header>
      {mealDetail.ingredients.map((ingredient) => {
        const [gram, name] =
          ingredient.split(' ').length === 1
            ? ['', ingredient]
            : ingredient.split(' ');
        return (
          <DataTable.Row key={ingredient}>
            <DataTable.Cell>{name}</DataTable.Cell>
            <DataTable.Cell numeric>{gram}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );

  const renderStep = () =>
    mealDetail.steps.map((step) => (
      <ListItem key={step}>
        <CheckBox color="green" checked />
        <Body style={{ paddingHorizontal: 10 }}>
          <Text>{step}</Text>
        </Body>
      </ListItem>
    ));

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: mealDetail.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <UbuntuText>{mealDetail.duration}</UbuntuText>
        <UbuntuText>{mealDetail.complexity.toUpperCase()}</UbuntuText>
        <UbuntuText>{mealDetail.affordability.toUpperCase()}</UbuntuText>
      </View>
      <UbuntuText isBold customStyles={styles.title}>
        List of Ingredients...
      </UbuntuText>
      <View style={{ marginHorizontal: 10 }}>{renderIngredientsTable()}</View>
      <UbuntuText isBold customStyles={styles.title}>
        Steps:
      </UbuntuText>
      {}
      {renderStep()}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 15,
  },
});
