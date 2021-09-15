import React from "react";
import { View } from "react-native";
import calendarStyle from "../styles/calendarStyle"
import CalendarPicker from "react-native-calendar-picker";
import colors from "../utils/colors";
import { months, slicedWeekDays, weekDays } from "../utils/day";
import { useSelector, useDispatch } from "react-redux";
import { savedNotes } from "../store/actions/handleNotes";

const CalendarScreen = (props) => {
  const allNotes = useSelector((state) => state.notes.notesList);
  const dispatch = useDispatch();

  const today = new Date();

  const dateHandle = (date) => {
    const dateSliced = date.toString().slice(0, 11);
    const todaySliced = today.toString().slice(0, 11);

    if (dateSliced === todaySliced) {
      props.navigation.navigate("Home");
    } else {
      const formattedData = date.toString().slice(0, 15);

      const newDate = new Date(date);
      const weekDay = weekDays[newDate.getDay()];
      const today =
        weekDay + " " + newDate.getDate() + " " + months[newDate.getMonth()];

      const filterArr = [];
      allNotes.filter((el) => {
        if (el.creation_date === formattedData) {
          filterArr.push(el);
        }
      });
      dispatch(savedNotes(filterArr));

      props.navigation.navigate("SavedDay", {
        title: today,
      });
    }
  };

  return (
    <View style={calendarStyle.calendarContainer}>
      <CalendarPicker
        style={calendarStyle.calendarContainer}
        selectedDayColor={colors.accentColor}
        selectedDayTextColor={"#fff"}
        todayBackgroundColor={colors.primaryColor}
        weekdays={slicedWeekDays}
        nextTitle={"Avanti"}
        previousTitle={"Indietro"}
        months={months}
        selectYearTitle={"Seleziona anno"}
        selectMonthTitle={"Seleziona mese "}
        maxDate={today}
        onDateChange={dateHandle}
      />
    </View>
  );
};

export default CalendarScreen;
