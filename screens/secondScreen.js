import React, { useState } from "react";
import { View, FlatList, Image,SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Card } from "../components/card";

export const List = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: "15%",
          backgroundColor: "#242424",
          borderWidth: 1,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      >
        <Image
          style={{ width: 170, height: 40, marginLeft: 60 }}
          source={require("../assets/marvIcon.jpeg")}
        />
        <Icon name="search" color="red" size={40} width={230} height={200} />
      </View>
      <FlatList
        data={arr}
        renderItem={({ item }) => {
          return <Card title={item.title} source={item.source} />;
        }}
      />
    </SafeAreaView>
  );
};

const arr = [
  { title: "thor", source: require("../assets/650012.png") },
  { title: "thor", source: require("../assets/650012.png") },
  { title: "thor", source: require("../assets/650012.png") },
  { title: "thor", source: require("../assets/650012.png") },
];
