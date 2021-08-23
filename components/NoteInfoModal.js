import React from "react";
import { Text, Modal, Button, StyleSheet, View } from "react-native";

const NoteInfoModal = (props) => {

  return (
    <Modal visible={props.visible} animationType={"fade"}>
      <View style={styles.container}>
        <Text>{props.id}</Text>
        <Text>{props.text}</Text>
        <Text>{props.time}</Text>
        <Button onPress={props.closeModal} title="chiudi" />
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
});

export default NoteInfoModal;
