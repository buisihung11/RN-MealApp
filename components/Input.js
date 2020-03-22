import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = ({ style, ...restProp }) => {
  return <TextInput style={{ ...styles.input, ...style }} {...restProp} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 20
  }
});
