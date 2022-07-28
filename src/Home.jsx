import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import TopMovie from "./Components/TopMovie"
import "./styling/Home.css"

class Home extends React.Component {
  render() {
    return (
      <body>
        <NavBar />
        <TopMovie />
      </body>
    );
  }
}

export default Home;
