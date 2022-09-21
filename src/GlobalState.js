import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [watchList, setwatchlist] = useState([]);
  const [homeFeed, setFeed] = useState({});
  const [watched, setWatchedList] = useState([]);
  const [results, setResults] = useState([]);

  function addtoList(movie) {
    if (watchList) setwatchlist([movie, ...watchList]);
    console.log(watchList);
  }

  function addToWatched(movie) {
    setWatchedList([movie, ...watched]);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            console.log(data);
            setFeed(data);
          }
        });
    }, 500);
  }, []);

  const findResults = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data.results);
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        addtoList,
        watchList,
        homeFeed,
        addToWatched,
        watched,
        results,
        findResults,
        setResults,
        setwatchlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
