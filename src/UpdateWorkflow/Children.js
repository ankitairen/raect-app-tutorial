import React, { Component } from "react";
import GrandChildren from "./GrandChildren";

class Children extends Component {
  constructor(props) {
    super(props);
    console.log("Children - constructor");
    this.state = {
      component: "children"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Children - derivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Children - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Children - getSnapShotBeforeUpdate");
    return { message: "fromChildrenSnapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Children - componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("Children - rendering");
    return (
      <div>
        {this.state.component}
        <GrandChildren />
      </div>
    );
  }
}

export default Children;
