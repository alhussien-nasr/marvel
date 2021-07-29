import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
export const ComicCard = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <Image
        source={{ uri: image }}
        style={styles.imgStyle}
        resizeMode="cover"
      />
      <Text numberOfLines={2} style={styles.textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    height: 170,
    width: 120,
  },
  textStyle: {
    height: 50,
    color: "white",
  },
});
