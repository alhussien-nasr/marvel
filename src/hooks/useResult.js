import React, { useEffect, useState } from "react";
import axios from "axios";

export const useCharcter = () => {
  const [results, setResults] = useState([]);
  const searchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters",
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
  useEffect(() => {
    searchCharacters();
  }, []);
  return [results];
};

export const useSearch = () => {
  const [results, setResults] = useState([]);
  const searchCharacters = async (char) => {
    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters",
        {
          params: {
            ts: 1,
            apikey: "b0cb24725a85342620041b8414a86e93",
            hash: "f423de1460a48b164d168a6842846669",
            limit: 10,
            nameStartsWith: char,
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
  return [results, searchCharacters];
};

export const useCharcterId = (id) => {
  const [result, setResults] = useState(null);
  const searchCharacters = async () => {
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
  useEffect(() => {
    searchCharacters(id);
  }, []);
  return [result, searchCharacters];
};

export const useComics = (id) => {
  const [comic, setComic] = useState([]);
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
  useEffect(() => {
    comicCharacters(id);
  }, []);
  return [comic];
};

export const useEvent = (id) => {
  const [event, setEvent] = useState([]);
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
  useEffect(() => {
    eventCharacters(id);
  }, []);
  return [event];
};

export const useSeries = (id) => {
  const [series, setSeries] = useState([]);

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
  useEffect(() => {
    seriesCharacters(id);
  }, []);
  return [series];
};

export const useStories=(id)=>{
  const [stories, setStories] = useState([]);
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
    storiesCharacters(id);
  }, []);
  return[stories]
}