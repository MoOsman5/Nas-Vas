import React, { Component } from "react";
import "../styles/Loading.css";
import logo from "../utils/images/logo.png";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    // Simulating progress update for demonstration purposes
    this.progressTimer = setInterval(() => {
      this.updateProgress();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.progressTimer);
  }

  updateProgress = () => {
    // Update the progress (range between 0 to 100)
    this.setState((prevState) => ({
      progress: prevState.progress < 100 ? prevState.progress + 10 : 100,
    }));
  };
  render() {
    const { progress } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "500px", height: "150px", marginBottom: "50px" }}
        />

        <div className="loader-bar">
          <div className="progress-bar" style={{width:`${progress}%`}}></div>
        </div>
        <p>Loading...</p>
      </div>
    );
  }
}

export default Loading;
