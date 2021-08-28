import React, { useState } from "react";
import { Text, Modal, Button, StyleSheet, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { updateNote } from "../store/actions/handleNotes";

const NoteInfoModal = (props) => {
  const [newText, setNewText] = useState(props.text);

  const dispatch = useDispatch()

  const handleText = (value) => {
    setNewText(value);
  };

  const updateNoteFun = () => {
    console.log("newText: " + newText + " props.text: " + props.text)
    dispatch(updateNote(newText, props.id))
  }

  const closeAndSave = () => {
    props.closeModal();
    if (newText.trim() !== props.text.trim()) {
      updateNoteFun();
    }
  };

  return (
    <Modal visible={props.visible} animationType={"fade"}>
      <View style={styles.container}>
      <Text>salvato alle: {props.time}</Text>
        <TextInput
          style={styles.textInput}
          value={newText}
          onChangeText={handleText}
          multiline={true}
        />
        <Button onPress={closeAndSave} title="chiudi" />
      </View>
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
