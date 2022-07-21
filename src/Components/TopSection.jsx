import React, { useState, useEffect } from "react";

const TopSection = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star-wars&apikey=8a08a7b9`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">{/* <MovieList movies={movies} /> */}</div>
    </div>
  );
};

export default TopSection;
