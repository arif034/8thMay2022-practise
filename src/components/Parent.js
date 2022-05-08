import { Component } from "react";
import Child from "./Child.js";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tempName: ""
    };
  }

  updateName = (name) => {
    this.setState(() => {
      return { name: name };
    });
  };

  updateTempName = (event) => {
    this.setState(() => {
      return {
        tempName: event.target.value
      };
    });
  };

  render() {
    return (
      <div>
        <br />
        <input
          type="text"
          placeholder="Enter name here..."
          onChange={this.updateTempName}
          value={this.state.tempName}
        />
        <Child name={this.state.tempName} updateName={this.updateName} />
        <br />
        My name is {this.state.name}
      </div>
    );
  }
}
export default Parent;
