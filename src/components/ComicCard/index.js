import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
export const ComicCard = ({ imageDetails, textDetails }) => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Image source={imageDetails} style={styles.imgStyle} />
      <Text style={{ color: "white" }}>{textDetails}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 10,
  },
  imgStyle:{ height: 170, width: 120 }
});
