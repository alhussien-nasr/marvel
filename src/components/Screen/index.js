import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Indicator } from "../index";
export const Screen = ({ children, loading, styleScreen }) => {
  return (
    <SafeAreaView style={[styles.container, styleScreen]}>
      <View style={[styles.container, styleScreen]}>
        {loading ? <Indicator /> : children}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
