import React, { Component } from "react";
import CalendarPicker from "react-native-calendar-picker";
import colors from "../utils/colors";
import { months, slicedWeekDays } from "../utils/day";
import { useSelector } from "react-redux";

const CalendarPickerComponent = (props) => {
  const allNotes = useSelector((state) => state.notes.notesList);

  const dateHandle = (date) => {
    const formattedData = date.toString().slice(0, 15);

    const fetchNotesByData = allNotes.filter((el) => {
      if (el.creation_date === formattedData) {
        props.navigation.navigate("SavedDay", { data: fetchNotesByData });
      } else {
        return null
      }
    });
  };

  return (
    <CalendarPicker
      selectedDayColor={colors.accentColor}
      selectedDayTextColor={"#fff"}
      todayBackgroundColor={colors.primaryColor}
      weekdays={slicedWeekDays}
      nextTitle={"Avanti"}
      previousTitle={"Indietro"}
      months={months}
      selectYearTitle={"Seleziona anno"}
      selectMonthTitle={"Seleziona mese "}
      maxDate={new Date()}
      onDateChange={dateHandle}
    />
  );
};

export default CalendarPickerComponent;
