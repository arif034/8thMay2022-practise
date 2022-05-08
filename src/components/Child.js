import { Component } from "react";

class Child extends Component {
  render(props) {
    return (
      <div>
        <br />
        <button
          onClick={() => {
            this.props.updateName(this.props.name);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Child;
