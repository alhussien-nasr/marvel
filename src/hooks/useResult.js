import { useEffect, useState } from "react";
import axios from "axios";

export const useCharcter = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    searchCharacters();
  }, []);
  return { results, loading };
};

export const useSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchCharacters = async (char) => {
    try {
      setLoading(true);
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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  return [results, searchCharacters, loading];
};

export const useCharcterId = (id) => {
  const [result, setResults] = useState([]);
  const [loadingCharcter, setLoading] = useState(true);
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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    searchCharacters(id);
  }, []);
  return [result, loadingCharcter];
};

export const useComics = (id) => {
  const [comic, setComic] = useState([]);
  const [loadingComics, setLoading] = useState(true);
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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    comicCharacters(id);
  }, []);
  return [comic, loadingComics];
};

export const useEvent = (id) => {
  const [event, setEvent] = useState([]);
  const [loadingEvent, setLoading] = useState(true);
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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    eventCharacters(id);
  }, []);
  return [event, loadingEvent];
};

export const useSeries = (id) => {
  const [series, setSeries] = useState([]);
  const [loadingSeries, setLoading] = useState(true);

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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    seriesCharacters(id);
  }, []);
  return [series, loadingSeries];
};

export const useStories = (id) => {
  const [stories, setStories] = useState([]);
  const [loadingStories, setLoading] = useState(true);
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
        setLoading(false);
      }
    } catch (err) {
      console.log("error==>", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    storiesCharacters(id);
  }, []);
  return [stories, loadingStories];
};
