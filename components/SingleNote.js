import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";

export default function SingleNote(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => console.log("delete")}>
        <Ionicons name="remove-circle-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    width: "80%",
    fontSize: 16,
    alignItems: "center", // if you want to fill rows left to right
  },
  deleteButton: {
    borderRadius: 50
  }
});
