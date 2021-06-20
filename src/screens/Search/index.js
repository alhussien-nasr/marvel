import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SearchCard } from "../../components";
import Highlighter from "react-native-highlight-words";
import { images } from "../../assets";
import axios from "axios";
import { CharacterDetails } from "../CharacterDetails";
export const Search = () => {
  const [char, setchar] = useState("");
  const [results, setResults] = useState([]);
  const searchApi = async () => {
    const response = await axios.get(
      "http://gateway.marvel.com/v1/public/characters?ts=MMMddHH:mm:ss&apikey=b0cb24725a85342620041b8414a86e93&hash=51febc3f57177cc9969a6456be4a554c",
      {
        Params: {
          // 'apikey': "b0cb24725a85342620041b8414a86e93",
          // 'ts': "MMMddHH:mm:ss",
          // 'hash': "51febc3f57177cc9969a6456be4a554c",
          comics: char,
          name: char,
          events: char,
          series: char,
          stories: char,
          orderBy:'name'
        },
      }
    );
    console.log(response.data.data.results[0].comics)
    // console.log(response.data.data.results);
    setResults(response.data.data.results[0].comics);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.mainView}
      >
        <View style={styles.viewOne}>
          <FontAwesome name="search" size={24} color="white" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search for a character..."
            placeholderTextColor="white"
            value={char}
            onChangeText={(charac) => setchar(charac)}
            onEndEditing={searchApi}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.textStyle}>cancel</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={searchArr}
        renderItem={({ item }) => {
          return <SearchCard img={item.img} name={item.name} search={char} />;
        }}
      />
    </SafeAreaView>
  );
};

const searchArr = [
  { name: "sfsdfdsf", img: images.logo },
  { name: "sfsdfdsf", img: images.logo },
  { name: "sfsdfdsf", img: images.logo },
];

const styles = StyleSheet.create({
  mainView:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
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
