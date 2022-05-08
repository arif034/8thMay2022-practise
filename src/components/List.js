import ListElement from "./ListElement.js";
import { Component } from "react";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: "",
      list: []
    };
  }

  updateElement = (event) => {
    this.setState(() => {
      return {
        element: event.target.value
      };
    });
  };

  updateList = () => {
    this.setState(() => {
      return {
        list: [this.state.element, ...this.state.list],
        element: ""
      };
    });
  };

  render() {
    const listElement = this.state.list.map((element, index) => {
      return <ListElement key={index} element={element} />;
    });
    return (
      <div>
        <input
          type="text"
          value={this.state.element}
          onChange={this.updateElement}
          placeholder="Enter new element here..."
        />
        <br />
        <button onClick={this.updateList}>Submit</button>
        {listElement}
      </div>
    );
  }
}
export default List;
