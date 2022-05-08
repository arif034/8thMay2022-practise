import { Component } from "react";
import Child from "./Child.js";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempName: "",
      name: ""
    };
  }

  setName = (event) => {
    this.setState(() => {
      return { tempName: event.target.value };
    });
  };

  updateName = () => {
    this.setState(() => {
      return { name: this.state.tempName };
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Enter name here..."
          value={this.state.tempName}
          onChange={this.setName}
        />
        <br />
        <button onClick={this.updateName}>Submit</button>
        <Child name={this.state.name} />
      </div>
    );
  }
}
export default Parent;
