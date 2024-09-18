import { StyleSheet, View, Text, Pressable, } from "react-native";

function GoalItem(props) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    alignItems: 'center',
  },
  goalItem: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.85,
  }
});