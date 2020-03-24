import * as React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/MealApp/CategoriesScreen";
import CategoryMealsScreen from "../screens/MealApp/CategoryMealsScreen";
import FavoritesScreen from "../screens/MealApp/FavoritesScreen";
import FilterScreen from "../screens/MealApp/FilterScreen";
import MealDetailScreen from "../screens/MealApp/MealDetailScreen";

const Stack = createStackNavigator();

const MealNavigator = (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? "orange" : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : "orange"
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Meal Categories" }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MealNavigator;
