import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorite Screen</Text>
      <CustomButton onPress={() => navigation.navigate("Categories")}>
        Go to categories
      </CustomButton>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
