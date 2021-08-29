import React, { useState } from "react";
import { Text, Modal, Button, StyleSheet, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../store/actions/handleNotes";
import colors from "../utils/colors";

const NoteInfoModal = (props) => {
  const noteData = useSelector((state) => state.noteData);
  const [newText, setNewText] = useState(props.text);

  const dispatch = useDispatch();

  const handleText = (value) => {
    setNewText(value);
  };

  const updateNoteFun = () => {
    dispatch(updateNote(newText, props.id));
  };

  const closeAndSave = () => {
    props.closeModal();
    if (newText.trim() !== props.text.trim() && newText.trim !== "") {
      updateNoteFun();
    }
  };

  return (
    <Modal visible={props.visible} animationType={"fade"}>
      <TouchableWithoutFeedback onPress={closeAndSave}>
      <View style={styles.container}>
        <Text>salvato alle: {props.time}</Text>
        <TextInput
          style={styles.textInput}
          value={newText}
          onChangeText={handleText}
          multiline={true}
        />
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    paddingVertical: 25,
    marginVertical: 25,
    paddingHorizontal: 5,
    width: "80%",
    fontSize: 22,
  },
});

export default NoteInfoModal;
