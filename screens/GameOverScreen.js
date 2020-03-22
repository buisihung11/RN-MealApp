import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GameOverScreen = ({ numberOfRounds, userNumber, restartGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {numberOfRounds}</Text>
      <Text>User number: {userNumber}</Text>
      <Button title="New game" onPress={restartGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
