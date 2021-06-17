import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Highlighter from "react-native-highlight-words";
export const SearchCard = ({ name, img }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ borderRadius: 23 }}>
        <Image source={img} style={styles.imgStyle} resizeMode="stretch" />
      </View>
      <View style={styles.viewOne}>
        <Highlighter
          highlightStyle={{ backgroundColor: "#C44A4A" }}
          searchWords={["jns", "f", "the"]}
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
    marginBottom: 20,
  },
  viewOne:{justifyContent: "center", marginLeft: 8},
  imgStyle: {
    width: 100,
    height: 85,
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
  },
  textStyle: { fontSize: 20, fontSize: 23, fontWeight: "700" },
});
