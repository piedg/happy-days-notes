import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import NotesList from "../components/NotesList";

export default function SavedDayScreen({ route, title }) {
  const savedList = route.params.data;

  console.log("logg", title)
  useEffect(() => {}, []);

  return (
    <View style={styles.noteContainer}>
      <Text style={styles.title}>{route.params.title}</Text>
      <NotesList notesData={savedList} />
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    height: "80%",
    paddingVertical: 15,
  },
  title: {
    alignSelf: 'center',
    color: "#000",
    fontSize: 25,
  },
});
