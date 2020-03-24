import React from "react";
import { StyleSheet, Text } from "react-native";

const UbuntuText = ({ isBold = false, customStyles = {}, children }) => (
  <Text style={[styles.font(isBold), customStyles]}>{children}</Text>
);
export default UbuntuText;

const styles = StyleSheet.create({
  font: isBold => ({
    fontFamily: isBold ? "ubuntu-bold" : "ubuntu-regular"
  })
});
