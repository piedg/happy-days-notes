import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import NotesList from "../components/NotesList";

export default function SavedDayScreen(props) {
  return (
    <View style={styles.noteContainer}>
      <NotesList data={props.data} />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    height: "80%",
    paddingVertical: 15,
  },
});
