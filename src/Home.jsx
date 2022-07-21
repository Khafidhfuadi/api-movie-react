import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import TopSec from "./Components/TopApi";
import "./styling/Home.css"

class Home extends React.Component {
  render() {
    return (
      <body>
        <NavBar />
        <TopSec />
      </body>
    );
  }
}

export default Home;
