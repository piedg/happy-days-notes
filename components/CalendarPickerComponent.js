import React, { Component } from "react";
import CalendarPicker from "react-native-calendar-picker";
import colors from "../utils/colors";
import { months, slicedWeekDays, weekDays } from "../utils/day";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

const CalendarPickerComponent = (props) => {
  const allNotes = useSelector((state) => state.notes.notesList);

  const dateHandle = (date) => {
    const formattedData = date.toString().slice(0, 15);

    const newDate = new Date(date)
    const weekDay = weekDays[newDate.getDay()];
    const today = weekDay + " " + newDate.getDate() + " " + months[newDate.getMonth()];
   
    console.log("Nuova data", today)

    const filterArr = [];
    allNotes.filter((el) => {
      if (el.creation_date === formattedData) {
        filterArr.push(el);
      }
    });
    props.navigation.navigate("SavedDay", { data: filterArr, title: today});
  };

  return (
    <View style={styles.calendarContainer}>
      <CalendarPicker
        style={styles.calendarContainer}
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
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    paddingTop: 15,
  },
});

export default CalendarPickerComponent;
