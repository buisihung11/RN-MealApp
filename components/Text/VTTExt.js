import React from "react";
import { StyleSheet, Text, View } from "react-native";

const VTTExt = ({ children }) => {
  return <Text style={styles.vt}>{children}</Text>;
};

export default VTTExt;

const styles = StyleSheet.create({
  vt: {
    fontFamily: "vt",
    fontSize: 20
  }
});
