import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
export const ComicCard = ({imageDetails,textDetails}) => {
  return (
      <TouchableOpacity
        style={{
          borderWidth:1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius:8,marginRight:10
        }}
      >
        <Image source={imageDetails} style={{height:170 , width:120}} />
        <Text style={{color:'white'}}>{textDetails}</Text>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
