import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Highlighter from "react-native-highlight-words";
export const SearchCard = ({ name, image, search, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={styles.imgStyle}
        resizeMode="cover"
      />
      <View style={styles.viewOne}>
        <Highlighter
          highlightStyle={{ backgroundColor: "#C44A4A" }}
          searchWords={[search]}
          textToHighlight={name}
          style={styles.textStyle}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 85,
    borderRadius: 23,
    flexDirection: "row",
    backgroundColor: "#404040",
  },
  viewOne: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  imgStyle: {
    width: 100,
    height: 85,
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "700",
  },
});
