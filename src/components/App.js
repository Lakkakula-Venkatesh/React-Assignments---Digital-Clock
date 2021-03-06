import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <>
        <h3 id="time">{this.state.time}</h3>
      </>
    );
  }
}

export default App;
