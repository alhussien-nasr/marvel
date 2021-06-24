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
import axios from "axios";
export const Search = () => {
  const [char, setchar] = useState("");
  const [results, setResults] = useState([]);
  const searchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters",
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
            nameStartsWith: char,
          },
        }
      );
      // console.log(response.data?.data?.results);
      if (response) {
        setResults(response.data?.data?.results);
      }
    } catch (err) {
      console.log("error==>", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.viewOne}>
          <FontAwesome name="search" size={24} color="white" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search for a character..."
            placeholderTextColor="white"
            value={char}
            onChangeText={(charac) => setchar(charac)}
            onEndEditing={searchCharacters}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text style={styles.textStyle}>cancel</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={results}
        renderItem={({ item }) => {
          return (
            <SearchCard item={item}
              img={item.thumbnail.path + "." + item.thumbnail.extension}
              name={item.name}
              search={char}
            />
          );
        }}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
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
