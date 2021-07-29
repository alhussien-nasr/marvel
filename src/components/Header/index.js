import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { images } from "../../assets";
export const Header = ({ onSearch }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imgStyle}
          source={images.logo}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
        <Icon name="search" color="red" size={40} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "15%",
    backgroundColor: "#141414",
    borderWidth: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: 170,
    height: 40,
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
