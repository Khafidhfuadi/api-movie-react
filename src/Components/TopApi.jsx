import axios from "axios";
import React, { useState, useEffect } from "react";

function TopApi() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=31a6b18e67bfaf12776d9a9e364d02a5`;

    axios({
      method: "get",
      url: url,
    }).then(function (response) {
      setMovies(response.data);
      console.log("POPULAR MOVIES", movies);
    });
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

export default TopApi;
