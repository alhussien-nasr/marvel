import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SearchCard, Screen, Indicator } from "../../components";
import { useSearch } from "../../hooks/useResult";
import { BlurView } from "expo-blur";
export const Search = ({ navigation }) => {
  const [char, setchar] = useState("");
  const [results, searchCharacters, loading] = useSearch();
  return (
    <Screen styleScreen={{ backgroundColor: "transparent" }}>
      <BlurView style={styles.container} intensity={100} tint="dark">
        <View style={styles.mainView}>
          <View style={styles.viewOne}>
            <FontAwesome name="search" size={24} color="white" />
            <TextInput
              style={styles.inputStyle}
              placeholder="Search for a character..."
              placeholderTextColor="white"
              value={char}
              onChangeText={(charac) => setchar(charac)}
              onSubmitEditing={() => searchCharacters(char)}
              keyboardAppearance="dark"
              returnKeyLabel="Search"
              returnKeyType="search"
              autoFocus
              clearButtonMode="while-editing"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <Indicator />
        ) : (
          <FlatList
            data={results}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ alignItems: "center" }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => {
              const { id, name, thumbnail } = item;
              const image = thumbnail.path + "." + thumbnail.extension;
              return (
                <SearchCard
                  {...{ image, name }}
                  search={char}
                  onPress={() =>
                    navigation.navigate("CharacterDetails", { id })
                  }
                />
              );
            }}
          />
        )}
      </BlurView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
    paddingTop: 30,
  },
  viewOne: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: "70%",
    backgroundColor: "#404040",
    borderRadius: 15,
    paddingLeft: 15,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: "gray",
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingHorizontal: 15,
  },
  textStyle: {
    fontSize: 20,
    color: "#C44A4A",
  },
  separator: {
    height: 10,
  },
});
