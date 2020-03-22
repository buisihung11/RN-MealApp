import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const GoalApp = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addGoalHandler = value => {
    if (value.length !== 0) {
      setGoalsList(prevList => [
        ...prevList,
        { key: Math.random().toString(), value }
      ]);
      setOpenModal(false);
    }
  };

  const removeGoalHandler = goalId => {
    console.log(goalId);
    setGoalsList(prevList => prevList.filter(goal => goal.key !== goalId));
  };

  return (
    <View style={styles.container}>
      <Text>Hello World 🐱‍👤</Text>
      <Button title="Add new goal" onPress={() => setOpenModal(true)} />
      <GoalInput
        visible={openModal}
        onAdd={addGoalHandler}
        onCancel={() => setOpenModal(false)}
      />
      {!goalsList.length ? (
        <Text>No goals added yet</Text>
      ) : (
        <FlatList
          data={goalsList}
          renderItem={({ item }) => (
            <GoalItem
              onDelete={removeGoalHandler.bind(this, item.key)}
              value={item.value}
            />
          )}
        />
      )}
    </View>
  );
};

export default GoalApp;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 60
  }
});
