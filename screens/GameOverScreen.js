import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";
import UbuntuText from "../components/Text/UbuntuText";

const GameOverScreen = ({ numberOfRounds, userNumber, restartGame }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <UbuntuText isBold customStyles={{ fontSize: 30 }}>
          Game Over!
        </UbuntuText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            fadeDuration={300}
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"
            // }}
            resizeMode="cover"
          />
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
          <UbuntuText customStyles={{ fontSize: 20, textAlign: "center" }}>
            Number of rounds:{" "}
            <Text style={styles.highlightText}>{numberOfRounds} </Text>
            to guess number
            <Text style={styles.highlightText}> {userNumber}</Text>
          </UbuntuText>
        </View>
        <Button title="New game" onPress={restartGame} />
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlightText: {
    color: "orange"
  }
});
