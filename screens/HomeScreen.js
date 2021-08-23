import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import NotesList from "../components/NotesList";
import { Ionicons } from "@expo/vector-icons";
import { months, weekDays } from "../utils/day";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../store/actions/handleNotes";
import uuid from "react-uuid";

export default function Home() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  //const [_date, _setDate] = useState("");
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const allNotes = useSelector((state) => state.notes.notesList);

  const date = new Date();
  const weekDay = weekDays[date.getDay()];
  const today = weekDay + " " + date.getDate() + " " + months[date.getMonth()];
  const currentTime =
    date.getHours() +
    (9 < date.getMinutes() ? ":" : ":0") +
    date.getMinutes() +
    (9 < date.getSeconds() ? ":" : ":0") +
    date.getSeconds();
  const nota = { text, time, id, creation_date: date };

  const inputHandler = (value) => {
    setText(value);
  };

  useEffect(() => {
    setTime(currentTime);
    //_setDate(date);

    setId(uuid());
  }, [currentTime]);

  const addNewNote = () => {
    if (!text || text.trim() === "") {
      return alert("Inserisci testo");
    }

    dispatch(addNote(nota));
    Keyboard.dismiss();
    setText("");
  };

  const filterById = (id) => {
    const found = allNotes.filter((el) => el.id === id);
    console.log(found);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{today}</Text>
        </View>
        <View style={styles.noteContainer}>
          <NotesList data={allNotes} />
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
              value={text}
            />
            <TouchableOpacity onPress={addNewNote} style={styles.addButton}>
              <Ionicons name="add-circle-outline" size={40} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
    bottom: Platform.OS === "ios" ? 60 : 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#eee",
  },
  input: { width: "90%", fontSize: 18 },
});
