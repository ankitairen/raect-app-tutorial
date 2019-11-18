import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AuxComponent from "./fragmentAlternative";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "parent component"
    };
  }

  clickHandler = () => {
    this.setState({
      component: "Parent Component Clicked"
    });
  };

  render() {
    return (
      <AuxComponent>
        <div
          onClick={() => {
            this.clickHandler();
          }}
        >
          {this.state.component}
          <ChildComponent parentComponent={this.state.component} />
        </div>
        <span> Adjacent JSX Elements</span>
      </AuxComponent>
    );
  }
}

export default ParentComponent;
