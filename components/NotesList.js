import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import colors from "../utils/colors";
import SingleNote from "./SingleNote";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SingleNote text={"ciao"}/>
        <SingleNote text={"Sono una nota lunghissimaaaa"} />
        <SingleNote text={"Sono una nota lunasdsadsadasghissimaaaa"} />
        <SingleNote text={"Sono una nota lunasdsasimaaaa"} />
        <SingleNote text={"Sono una nota lunasdsadsadasghissimaaaalunasdsadsadasghissimaaaa"} />
        <SingleNote text={"Sono una nota lunasdsadsadasghissimaaaa"} />
        <SingleNote text={"Sono una noaaa"} />
        <SingleNote text={"Ssghissimaaaa"} />
        <SingleNote text={"Sono una nota lunasdsadsadasghissimaaaa"} />
        <SingleNote text={"Sono unddasdasdasdasa nota sghissimaaaa"} />
        <SingleNote text={"Sono una nota sghissimaaaa"} />
        <SingleNote text={"Sonasaso una nota adsadsadsada"} />
        <SingleNote text={"Sono una nota sghissimaaaa"} />
        <SingleNote text={"Sono una no sad sad asdsa dta sghissimaaaa"} />
        <SingleNote text={"Sono una nota sghissimaaaa"} />
        <SingleNote text={"Sono una nota s dasdasdasdasdasdghissimaaaa"} />
        <SingleNote text={"Sono una nota sghissimaadsadasdasdasdsadsadsadasdaaasghissimaadsadasdasdasdsadsadsadasdaaa"} />
        <SingleNote text={"Sono una nodddddasdta sghissimaaaa"} />

    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
