import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import homeStyle from "../styles/homeStyle";
import NotesList from "../components/NotesList";
import { Ionicons } from "@expo/vector-icons";
import { months, weekDays } from "../utils/day";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../store/actions/handleNotes";
import uuid from "react-uuid";

const Home = () => {
  const [text, setText] = useState("");

  const input = text.length > 0 ? homeStyle.input : homeStyle.inputFullWidth;
  const btn = text.length > 0 ? homeStyle.addButton : homeStyle.addButtonHidden;

  const listaNote = useSelector((state) => state.notes.notesList);
  const dispatch = useDispatch();

  const date = new Date();
  const weekDay = weekDays[date.getDay()];
  const today = weekDay + " " + date.getDate() + " " + months[date.getMonth()];
  const currentTime =
    date.getHours() + (9 < date.getMinutes() ? ":" : ":0") + date.getMinutes();

  const nota = {
    text,
    time: currentTime,
    id: uuid(),
    creation_date: date.toString().slice(0, 15),
    formatted_date: today,
  };

  const inputHandler = (value) => {
    setText(value);
  };

  const addNewNote = () => {
    if (!text || text.trim() === "") {
      return alert("Inserisci testo");
    }
    dispatch(addNote(nota));
    Keyboard.dismiss();
    setText("");
  };

  const filterByDay = (listaNote) => {
    const formattedData = date.toString().slice(0, 15);
    const filterArr = [];
    listaNote.filter((el) => {
      if (el.creation_date === formattedData) {
        filterArr.push(el);
      }
    });
    return filterArr;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={homeStyle.container}>
        <View style={homeStyle.titleContainer}>
          <Text style={homeStyle.title}>{today}</Text>
        </View>
        <View style={homeStyle.noteContainer}>
          <NotesList notesData={filterByDay(listaNote)} />
        </View>
        <KeyboardAvoidingView
          style={homeStyle.inputContainer}
          enabled={Platform.OS === 'ios' ? true : false}
          behavior={"position"}
        >
            <TextInput
              multiline={true}
              style={input}
              placeholder="Cos'è successo di bello?"
              onChangeText={inputHandler}
              value={text}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity onPress={addNewNote} style={btn}>
              <Ionicons name="add-circle-outline" size={40} />
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};



export default Home;
