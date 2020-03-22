import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = ({ onAdd, onCancel, visible }) => {
  const [goalContent, setGoalContent] = useState("");

  const cancelHandler = () => {
    onCancel();
    setGoalContent("");
  };

  const addGoalHandler = () => {
    onAdd(goalContent);
    setGoalContent("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.goalInput}
          placeholder="Your goal"
          onChangeText={setGoalContent}
          value={goalContent}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" color="red" onPress={cancelHandler} />
          <Button title="Add goal" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10
  },
  goalInput: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%"
  }
});
