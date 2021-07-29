import React from "react";
import { ScrollView, Image, Text, StyleSheet } from "react-native";
import { Screen, Card } from "../../components";
import {
  useCharcterId,
  useComics,
  useEvent,
  useSeries,
  useStories,
} from "../../hooks/useResult";
export const CharacterDetails = ({ route }) => {
  const { id } = route.params;
  const [result, loadingCharcter] = useCharcterId(id);
  const [comic, loadingComics] = useComics(id);
  const [event, loadingEvent] = useEvent(id);
  const [series, loadingSeries] = useSeries(id);
  const [stories, loadingStories] = useStories(id);
  // const noComicsData = comic?.length == 0;
  return (
    <Screen loading={loadingCharcter}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: result[0]?.thumbnail.path + ".jpg" }}
          style={styles.imgStyle}
          resizeMode="cover"
        />
        <Text style={styles.textOneStyle}>{result[0]?.name}</Text>
        {result[0]?.description ? (
          <Text style={styles.textTwoStyle}>descrtiption</Text>
        ) : null}
        <Text style={{ color: "white" }}>{result[0]?.description}</Text>
        <Card loading={loadingComics} title={"comics"} data={comic} />
        <Card data={event} title={"events"} loading={loadingEvent} />
        <Card data={series} title={"series"} loading={loadingSeries} />
        <Card data={stories} title={"Stories"} loading={loadingStories} />
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  textOneStyle: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  textTwoStyle: {
    fontSize: 20,
    color: "#C44A4A",
    marginBottom: 10,
  },
});
