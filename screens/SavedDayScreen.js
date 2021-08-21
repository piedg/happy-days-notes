import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import NotesList from "../components/NotesList";

export default function SavedDayScreen() {
  return (
    <View style={styles.container}>
      <Text>Ciao sono in saved day screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
