import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { ComicCard } from "../../components";
import axios from "axios";
export const CharacterDetails = ({ route }) => {
  const [result, setResults] = useState(null);
  const [comic, setComic] = useState([]);
  const [event, setEvent] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);
  const { id } = route.params;
  console.log(id);
  console.log(result)

  const searchCharacters = async (id) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}`,
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
          },
        }
      );
      if (response) {
        setResults(response.data?.data?.results);
      }
    } catch (err) {
      console.log("error==>", err);
    }
  };
  const comicCharacters = async (id) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics`,
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
          },
        }
      );
      if (response) {
        setComic(response.data?.data?.results);
      }
    } catch (err) {
      console.log("error==>", err);
    }
  };
  const eventCharacters = async (id) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/events`,
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
          },
        }
      );
      if (response) {
        setEvent(response.data?.data?.results);
      }
    } catch (err) {
      console.log("error==>", err);
    }
  };
  const seriesCharacters = async (id) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/series`,
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
          },
        }
      );
      if (response) {
        setSeries(response.data?.data?.results);
      }
    } catch (err) {
      console.log("error==>", err);
    }
  };
  const storiesCharacters = async (id) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/stories`,
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
          },
        }
      );
      if (response) {
        setStories(response.data?.data?.results);
      }
    } catch (err) {
      console.log("error==>", err);
    }
  };
  useEffect(() => {
    seriesCharacters(id);
  }, []);
  useEffect(() => {
    eventCharacters(id);
  }, []);
  useEffect(() => {
    searchCharacters(id);
  }, []);
  useEffect(() => {
    comicCharacters(id);
  }, []);
  useEffect(() => {
    storiesCharacters(id);
  }, []);
  if (!result) {
    return null;
  }
  
  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <ScrollView>
        <View>
          <Image source={{uri:result[0].thumbnail.path+'.jpg'}} style={styles.imgStyle} />
          <Text style={styles.textOneStyle}>{result[0].name}</Text>
          <Text style={styles.textTwoStyle}>descrtiption</Text>
          <Text style={{ color: "white" }}>{result[0].description}</Text>
        </View>
        <View>
          <Text style={styles.textThreeStyle}>comics</Text>
          <FlatList
            horizontal
            data={comic}
            renderItem={({ item }) => {
              return (
                <ComicCard
                  imageDetails={
                    item.thumbnail.path + "." + item.thumbnail.extension
                  }
                  textDetails={item.title}
                />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.textThreeStyle}>Events</Text>
          <FlatList
            horizontal
            data={event}
            renderItem={({ item }) => {
              return (
                <ComicCard
                  imageDetails={
                    item.thumbnail.path + "." + item.thumbnail.extension
                  }
                  textDetails={item.title}
                />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.textThreeStyle}>series</Text>
          <FlatList
            horizontal
            data={series}
            renderItem={({ item }) => {

              return (
                <ComicCard
                  imageDetails={
                    item.thumbnail.path + "." + item.thumbnail.extension
                  }
                  textDetails={item.title}
                />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.textThreeStyle}>Stories</Text>
          <FlatList
            horizontal
            data={stories}
            renderItem={({ item }) => {
              console.log(item.thumbnail)

              return (
                
                <ComicCard 
                imageDetails={item.thumbnail + "." + item.thumbnail}
                 
                  textDetails={item.title}
                />
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
