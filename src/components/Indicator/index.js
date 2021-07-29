import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
export const Indicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
