import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UbuntuText = ({ isBold = false, styles = {}, children }) => {
  return <Text style={[styles.font(isBold), styles]}>{children}</Text>;
};

export default UbuntuText;

const styles = StyleSheet.create({
  font: isBold => ({
    fontFamily: isBold ? "ubuntu-bold" : "ubuntu-regular"
  })
});
