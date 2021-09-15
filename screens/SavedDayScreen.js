import React from "react";
import { View, Text } from "react-native";
import savedDay from "../styles/savedDayStyle";
import NotesList from "../components/NotesList";
import { useSelector } from "react-redux";

export default function SavedDayScreen({ route }) {
  const savedNotesList = useSelector((state) => state.notes.savedNotes);

  const handleSwipeLeft = () => {
    console.log("Swipe left");
  };

  return (
    <View style={savedDay.noteContainer}>
      <Text style={savedDay.title}>{route.params.title}</Text>
      <NotesList notesData={savedNotesList} />
    </View>
  );
}
