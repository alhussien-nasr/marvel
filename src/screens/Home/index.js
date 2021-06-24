import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { images } from "../../assets";
import { CharacterCard } from "../../components";
import axios from "axios";

export const Home = ({ navigation }) => {
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
  useEffect(() => {
    searchCharacters();
  }, []);
  // console.log(results)
  return (
    <SafeAreaView style={styles.saveView}>
      <View style={styles.viewStyle}>
        <Image style={styles.imgStyle} source={images.logo} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Icon name="search" color="red" size={40} width={230} height={200} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          return (
            <CharacterCard
               item={item}
              title={item.name}
              source={item.thumbnail.path + "." + item.thumbnail.extension}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  saveView: { backgroundColor: "black", flex: 1, alignItems: "center" },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "15%",
    backgroundColor: "#242424",
    borderWidth: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  imgStyle: { width: 170, height: 40, marginLeft: 60 },
});
const arr = [
  { title: "thor", source: images.logo },
  { title: "thor", source: images.logo },
  { title: "thor", source: images.logo },
  { title: "thor", source: images.logo },
];
