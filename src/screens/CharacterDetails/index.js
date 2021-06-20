import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { images } from "../../assets";
import { ComicCard } from "../../components";
export const CharacterDetails = () => {
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <ScrollView>
        <View>
          <Image source={images.logo} style={styles.imgStyle} />
          <Text style={styles.textOneStyle}>ultron</Text>
          <Text style={styles.textTwoStyle}>descrtiption</Text>
          <Text style={{ color: "white" }}>
            ldkljdfkljlkdllkdfjlklkjlkjlkdjgljldjgljldkjglkjlgkjlklnndflkgnlndflgnlkdnfglkldkgnlkdnglkdfnglkdfglkdlgdlgdlkgnldkgnlkdgndlkgndflkgnlkdfgnlkdfgnlkdfngkldnglkdfnglkdfnglkdfnglkdf
          </Text>
        </View>
        <View>
          <Text style={styles.textThreeStyle}>comics</Text>
          <FlatList
            horizontal
            data={arr}
            renderItem={({ item }) => {
              return (
                <ComicCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.textThreeStyle}>Events</Text>
          <FlatList
            horizontal
            data={arr2}
            renderItem={({ item }) => {
              return (
                <ComicCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.textThreeStyle}>series</Text>
          <FlatList
            horizontal
            data={arr3}
            renderItem={({ item }) => {
              return (
                <ComicCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.textThreeStyle}>Stories</Text>
          <FlatList
            horizontal
            data={arr3}
            renderItem={({ item }) => {
              return (
                <ComicCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeViewStyle: { flex: 1, backgroundColor: "black" },
  imgStyle: { width: "100%", height: 250, borderRadius: 15 },
  textOneStyle: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  textTwoStyle: { fontSize: 20, color: "#C44A4A", marginBottom: 10 },
  textThreeStyle: {
    color: "#C44A4A",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
const arr = [
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
];
const arr2 = [
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
];
const arr3 = [
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
];
const arr4 = [
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
  { img: images.logo, name: "dfgdfgdg" },
];
