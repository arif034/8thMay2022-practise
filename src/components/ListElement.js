import { Component } from "react";
class ListElement extends Component {
  render() {
    return <div> {this.props.element}</div>;
  }
}

export default ListElement;
