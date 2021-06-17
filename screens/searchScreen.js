import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SearchCard } from "../components/searchCard";
import Highlighter from "react-native-highlight-words";

export const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 50,
        }}
      >
        <View style={styles.viewOne}>
          <FontAwesome name="search" size={24} color="white" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search for a character..."
            placeholderTextColor="white"
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.textStyle}>cancel</Text>
        </TouchableOpacity>
      </View>
      <FlatList style={{flex:1}} data={searchArr} renderItem={({item})=>{ return <SearchCard img={item.img} name={item.name} />}}/>
      
    </SafeAreaView>
  );
};

const searchArr = [
  { name: "sfsdfdsf", img: require("../assets/650012.png") },
  { name: "sfsdfdsf", img: require("../assets/650012.png") },
  { name: "sfsdfdsf", img: require("../assets/650012.png") },
];

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  viewOne: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    width: "70%",
    justifyContent: "center",
    backgroundColor: "#404040",
    borderRadius: 15,
    paddingLeft: 15,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: "gray",
  },
  inputStyle: {
    width: "70%",
    height: 55,
    borderRadius: 15,
    color: "white",
    flex: 1,
    paddingLeft: 15,
  },
  textStyle: { fontSize: 20, color: "#C44A4A", marginTop: 15, marginLeft: 20 },
});