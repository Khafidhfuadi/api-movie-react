import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=31a6b18e67bfaf12776d9a9e364d02a5`;

const TopSection = () => {
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovies(response.data.results);
      console.log(movies[0]);
    });
  }, []);

  if (!movies) return null;

  return (
    <div className="container-fluid movie-app">
      {/* <div className="row">{console.log(movies.results[0].original_title)}</div> */}
    </div>
  );
};

export default TopSection;
