import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomButton = ({ customBtnStyle, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, customBtnStyle]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "orange",
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontFamily: "vt",
    fontSize: 20
  }
});
