import React, { useState } from "react";
import { Text, Modal, Button, StyleSheet, View, TextInput } from "react-native";

const NoteInfoModal = (props) => {
  const [newText, setNewText] = useState(props.text);
  //props.id

  const handleText = (value) => {
    setNewText(value);
  };

  const updateNote = () => {
    console.log("newText: " + newText + " props.text: " + props.text)
  }

  const closeAndSave = () => {
    props.closeModal();
    if (newText.trim() !== props.text.trim()) {
      updateNote();
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
