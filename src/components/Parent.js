import { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return prevState.count < 10
        ? { count: prevState.count + 1 }
        : { count: 10 };
    });
  };

  decrementCount = () => {
    this.setState((prevState) => {
      return prevState.count > 0
        ? { count: prevState.count - 1 }
        : { count: 0 };
    });
  };

  resetCount = () => {
    this.setState((prevState) => {
      return { count: 0 };
    });
  };

  render() {
    return <div></div>;
  }
}
export default Parent;
