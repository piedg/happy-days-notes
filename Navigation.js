import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/HomeScreen";
import SavedDay from "./screens/SavedDayScreen";
import CalendarPickerComponent from "./components/CalendarPickerComponent";
import colors from "./utils/colors";
import { Ionicons } from "@expo/vector-icons/build/Icons";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primaryColor },
          headerTitleStyle: { color: "#fff" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CalendarPickerComponent")}
              >
                <Ionicons
                  name="calendar-outline"
                  size={32}
                  style={{ marginRight: 15 }}
                  color="#fff"
                  title="Calendar"
                />
              </TouchableOpacity>
            ),
            headerTitle: "Happy Days 🌻",
          })}
        />
        <Stack.Screen options={{headerTitle: "Note Salvate 🌈" }} name="SavedDay" component={SavedDay} />
        <Stack.Screen
          options={{ headerTitle: "Seleziona giorno 🗓" }}
          name="CalendarPickerComponent"
          component={CalendarPickerComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
