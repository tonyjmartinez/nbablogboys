import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SliderMenu from "./ui/menu/SliderMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SliderMenu />
      </div>
    );
  }
}

export default App;
