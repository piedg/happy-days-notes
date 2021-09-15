import React from "react";
import { ScrollView, View } from "react-native";
import SingleNote from "./SingleNote";
import { useDispatch } from "react-redux";
import { deleteNoteById } from "../store/actions/handleNotes";

export default function NotesList({notesData}) {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch(deleteNoteById(id));
  };

  const renderList = notesData.map((nota, index) => (
    <SingleNote
      key={index}
      text={nota.text}
      time={nota.time}
      id={nota.id}
      deleteNote={() => deleteNote(nota.id)}
    />
  ));

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>{renderList}</ScrollView>
    </View>
  );
}
