import React, { Component } from "react";

class MostComplexApp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="Enter your name"
          ></input>
        </form>
        <h1>{this.state.firstName}</h1>
      </main>
    );
  }
}

export default MostComplexApp;
