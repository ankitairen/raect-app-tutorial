import React, { Component } from "react";
import Children from "./Children";

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
    this.state = {
      component: "parent"
    };
  }

  clickHandler = () => {
    this.setState({
      component: "parentClicked"
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("Parent - derivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent - getSnapShotBeforeUpdate");
    return { message: "fromParentSnapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent - componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("Parent - rendering");
    return (
      <div
        onClick={() => {
          this.clickHandler();
        }}
      >
        {this.state.component}
        <Children />
      </div>
    );
  }
}

export default Parent;
