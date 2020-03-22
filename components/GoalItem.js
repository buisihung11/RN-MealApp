import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ value, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View>
        <Text style={styles.goalItem}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc"
  }
});
