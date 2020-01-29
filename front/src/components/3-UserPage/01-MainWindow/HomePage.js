import React, { Component } from "react";
import Navigation from "./01-Navigation/Navigation";
import Main from "./02-Main/Main";
import axios from "axios";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserAdmin: ""
    };
  }

  checkUserRole = () => {
    axios.get("http://localhost:8080/dvs/api/administrator").then(response => {
      if (response.data === true) {
        this.setState({ isUserAdmin: "true" });
      }
    });
  };

  componentDidMount() {
    this.checkUserRole();
  }

  render() {
    return (
      <div>
        <Navigation isUserAdmin={this.state.isUserAdmin} />
        <Main isUserAdmin={this.state.isUserAdmin} />
        <h1 className="m-3">{this.state.userMessage}</h1>
        <h1 className="m-3">{this.state.adminMessage}</h1>
      </div>
    );
  }
}

export default HomePage;
