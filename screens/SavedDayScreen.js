import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import NotesList from "../components/NotesList";

export default function SavedDayScreen({ route }) {
  console.log("SavedDay", route.params.data);
  const savedList = route.params.data;

  useEffect(() => {}, []);

  return (
    <View style={styles.noteContainer}>
      <NotesList notesData={savedList} />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    height: "80%",
    paddingVertical: 15,
  },
});
