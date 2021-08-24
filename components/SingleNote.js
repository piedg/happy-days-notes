import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NoteInfoModal from "./NoteInfoModal";
import { useDispatch } from "react-redux";
import { deleteNoteById, fetchNoteById } from "../store/actions/handleNotes";

const SingleNote = (props) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();


  const openModal = (id) => {
    setVisible(true);
    dispatch(fetchNoteById(id));

  };

  const closeModal = () => {
    setVisible(false);
  };

  
  return (
    <View style={styles.container}>
      <NoteInfoModal
        visible={visible}
        closeModal={closeModal}
        text={props.text}
        time={props.time}
        id={props.id}
      />
      <TouchableWithoutFeedback
        onPress={() => openModal(props.id)}
        title="apri modal"
      >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={props.deleteNote}
      >
        <Ionicons name="remove-circle-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    width: "80%",
    fontSize: 16,
    alignItems: "center", 
  },
  deleteButton: {
    borderRadius: 50,
  },
});

export default SingleNote;
