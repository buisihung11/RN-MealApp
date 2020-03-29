/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Feather } from '@expo/vector-icons';

import CategoriesScreen from '../screens/MealApp/CategoriesScreen';
import CategoryMealsScreen from '../screens/MealApp/CategoryMealsScreen';
import FavoritesScreen from '../screens/MealApp/FavoritesScreen';
import FilterScreen from '../screens/MealApp/FilterScreen';
import MealDetailScreen from '../screens/MealApp/MealDetailScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const DrawerButton = ({ navigation }) => (
  <View style={{ paddingHorizontal: 10 }}>
    <Feather
      onPress={() => navigation.openDrawer()}
      name="menu"
      color="black"
      size={25}
    />
  </View>
);

const MealNavigatorStack = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'orange' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'orange',
    }}
  >
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={({ navigation }) => ({
        title: 'Meal Categories',
        headerLeft: () => <DrawerButton navigation={navigation} />,
      })}
    />
    <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
    <Stack.Screen name="Filter" component={FilterScreen} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
  </Stack.Navigator>
);

const FavouriteNavigatorStack = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'orange' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'orange',
    }}
    initialRouteName="Favorites"
  >
    <Stack.Screen
      options={({ navigation }) => ({
        title: 'Your favorite meals',
        headerLeft: () => <DrawerButton navigation={navigation} />,
      })}
      name="Favorites"
      component={FavoritesScreen}
    />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
  </Stack.Navigator>
);

const FitlerStack = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'orange' : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'orange',
    }}
    initialRouteName="Favorites"
  >
    <Stack.Screen
      options={({ navigation }) => ({
        title: 'Filter',
        headerLeft: () => <DrawerButton navigation={navigation} />,
      })}
      name="Favorites"
      component={FilterScreen}
    />
  </Stack.Navigator>
);

const tabBarOptions =
  Platform.OS === 'android'
    ? {
        activeColor: 'orange',
        inactiveColor: '#3e2465',
        shifting: true,
        barStyle: {
          backgroundColor: '#694fad',
        },
        size: 25,
      }
    : { activeTintColor: 'tomato' };

const tabScreens = (
  <>
    <Tab.Screen
      options={{
        tabBarColor: 'white',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="book" color={color} size={25} />
        ),
      }}
      name="Meals"
      component={MealNavigatorStack}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="staro" color={color} size={25} />
        ),
        tabBarColor: 'black',
      }}
      name="Favourite"
      component={FavouriteNavigatorStack}
    />
  </>
);

const TabMealNavigator = () => {
  return Platform.OS === 'android' ? (
    <Tab.Navigator {...tabBarOptions}>{tabScreens}</Tab.Navigator>
  ) : (
    <Tab.Navigator tabBarOptions={tabBarOptions}>{tabScreens}</Tab.Navigator>
  );
};

const AppDrawer = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: 'orange',
        activeTintColor: 'white',
      }}
    >
      <Drawer.Screen name="Meals & Favorite" component={TabMealNavigator} />
      <Drawer.Screen name="Filter" component={FitlerStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppDrawer;
