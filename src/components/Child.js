import { Component } from "react";

class Child extends Component {
  render() {
    return <div>My name is {this.props.name}</div>;
  }
}

export default Child;
