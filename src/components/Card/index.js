import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { ComicCard } from "../index";

export const Card = ({ data, loading, title }) => {
  if (!data.length) {
    return null;
  }
  return (
    <>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          <Text style={styles.titleStyle}>{title}</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            horizontal
            data={data}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => {
              const { thumbnail, title } = item;
              const image = thumbnail?.path + "." + thumbnail?.extension;
              return <ComicCard {...{ image, title }} />;
            }}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: "#C44A4A",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    width: 10,
  },
});
