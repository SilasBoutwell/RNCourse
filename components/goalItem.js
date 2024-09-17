import { StyleSheet, View, Text, Pressable, } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
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
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    // borderWidth: 1,
    alignItems: 'center',
  },
  goalItem: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: 'white',
  },
});