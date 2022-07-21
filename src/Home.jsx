import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import TopSec from "./Components/TopSection";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <TopSec />
      </div>
    );
  }
}

export default Home;
