import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
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
  inputContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  input: {
    paddingTop: 10,
    paddingHorizontal: 22,
    paddingBottom: 10,
    borderWidth: 1,
    width: "88%",
    borderRadius: 50,
    fontSize: 18,
    marginRight: 15,
  },
  inputFullWidth: {
    paddingTop: 10,
    paddingHorizontal: 22,
    paddingBottom: 10,
    borderWidth: 1,
    width: "100%",
    borderRadius: 50,
    fontSize: 18,
    marginRight: 15,
  },
  addButtonHidden: {
    display: "none",
  },
  addButton: {
    position: "absolute",
    bottom: 2,
    right: 0,
    display: "flex",
  },
});
