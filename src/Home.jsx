import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import MovieRecom from "./Components/MovieRecom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <MovieRecom />
      </div>
    );
  }
}

export default Home;
