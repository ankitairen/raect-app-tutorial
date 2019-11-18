import React, { Component } from "react";
import withHOCFunction from "./withHOCFunction";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "child component"
    };
  }

  clickHandler = () => {
    this.setState({
      component: "Child Component Clicked"
    });
  };

  render() {
    return (
      <div
        onClick={() => {
          this.clickHandler();
        }}
      >
        {this.state.component}
        Parent Component {this.props.parentComponent}
      </div>
    );
  }
}

export default withHOCFunction(ChildComponent);
