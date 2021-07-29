import React from "react";
import { FlatList, View } from "react-native";
import { CharacterCard, Screen, Header } from "../../components";
import { useCharcter } from "../../hooks/useResult";

export const Home = ({ navigation }) => {
  const { results, loading } = useCharcter();
  const renderItem = ({ item }) => {
    const { name, thumbnail, id } = item;
    const source = thumbnail.path + "." + thumbnail.extension;
    return (
      <CharacterCard
        onPress={() => navigation.navigate("CharacterDetails", { id })}
        {...{ name, source }}
      />
    );
  };

  return (
    <Screen loading={loading}>
      <Header onSearch={() => navigation.navigate("Search")} />
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      />
    </Screen>
  );
};
