import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
export const CharacterCard = ({ source, name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: source }}
        resizeMode="cover"
        style={styles.imgStyle}
      />
      <BlurView intensity={80} style={styles.viewOne}>
        <Text style={styles.textStyle}>{name}</Text>
      </BlurView>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 140,
    borderRadius: 25,
    overflow: "hidden",
  },
  imgStyle: {
    width: 350,
    height: 150,
    borderRadius: 30,
  },
  viewOne: {
    width: 350,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F2323",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  textStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
});
