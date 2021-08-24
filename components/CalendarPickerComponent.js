import React, { Component } from "react";
import CalendarPicker from "react-native-calendar-picker";
import colors from "../utils/colors";
import { months, slicedWeekDays } from "../utils/day";

const CalendarPickerComponent = () => {
  const dateHandle = (data) => {
    const selectedData = data.toString().slice(0, 15);
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
