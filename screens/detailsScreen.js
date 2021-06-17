import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  FlatList,
} from "react-native";
import { SubCard } from "../components/subCard";
import { List } from "./secondScreen";
export const Details = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/650012.png")}
            style={{ width: "100%", height: 250, borderRadius: 15 }}
          />
          <Text
            style={{
              fontSize: 40,
              fontWeight: "700",
              color: "white",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            ultron
          </Text>
          <Text style={{ fontSize: 20, color: "#C44A4A", marginBottom: 10 }}>
            descrtiption
          </Text>
          <Text style={{ color: "white" }}>
            ldkljdfkljlkdllkdfjlklkjlkjlkdjgljldjgljldkjglkjlgkjlklnndflkgnlndflgnlkdnfglkldkgnlkdnglkdfnglkdfglkdlgdlgdlkgnldkgnlkdgndlkgndflkgnlkdfgnlkdfgnlkdfngkldnglkdfnglkdfnglkdfnglkdf
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#C44A4A",
              fontSize: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            comics
          </Text>
          <FlatList
            horizontal
            data={arr}
            renderItem={({ item }) => {
              return (
                <SubCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#C44A4A",
              fontSize: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Events
          </Text>
          <FlatList
            horizontal
            data={arr2}
            renderItem={({ item }) => {
              return (
                <SubCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#C44A4A",
              fontSize: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            series
          </Text>
          <FlatList
            horizontal
            data={arr3}
            renderItem={({ item }) => {
              return (
                <SubCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#C44A4A",
              fontSize: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Stories
          </Text>
          <FlatList
            horizontal
            data={arr3}
            renderItem={({ item }) => {
              return (
                <SubCard imageDetails={item.img} textDetails={item.name} />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const arr = [
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
];
const arr2 = [
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
];
const arr3 = [
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
];
const arr4 = [
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
  { img: require("../assets/650012.png"), name: "dfgdfgdg" },
];
