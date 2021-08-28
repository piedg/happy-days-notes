import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import SingleNote from "./SingleNote";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNoteById } from "../store/actions/handleNotes";

export default function NotesList() {
  const listaNote = useSelector((state) => state.notes.notesList);
  console.log("NotesList", listaNote);
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch(deleteNoteById(id));
  };


  useEffect(() => {
    
  }, [])


  const renderList = listaNote.map((nota, index) =>
      <SingleNote
        key={index}
        text={nota.text}
        time={nota.time}
        id={nota.id}
        deleteNote={() => deleteNote(nota.id)}
      />
    ) 

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>{renderList}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
