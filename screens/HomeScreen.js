import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import NotesList from "../components/NotesList";
import { Ionicons } from "@expo/vector-icons";
import { months, weekDays } from "../utils/day";
import colors from "../utils/colors";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const date = new Date();
  const weekDay = weekDays[date.getDay()];
  const today =
    weekDay +
    " " +
    date.getDate() +
    " " +
    months[date.getMonth()]

  const inputHandler = (value) => {
    setInputValue(value);
  };

  const addNote = () => {
    console.log(inputValue);
    setInputValue("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{today}</Text>
      </View>
      <View style={styles.noteContainer}>
        <NotesList />
      </View>
      <KeyboardAvoidingView
        style={styles.outInputContainer}
        enabled={Platform.OS === "ios" ? true : false}
        behavior={"position"}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nota"
            onChangeText={inputHandler}
            value={inputValue}
          />
          <TouchableOpacity onPress={addNote} stlyle={styles.addButton}>
            <Ionicons name="add-circle-outline" size={40} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteContainer: {
    height: "80%",
    paddingVertical: 15,
  },
  titleContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 25,
  },
  outInputContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#eee',
  },
  input: { width: "90%", fontSize: 18 },
});
