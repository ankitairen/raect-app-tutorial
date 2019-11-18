import React, { Component } from "react";

class GrandChildren extends Component {
  constructor(props) {
    super(props);
    console.log("GrandChildren - constructor");
    this.state = {
      component: "grand children"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GrandChildren - derivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("GrandChildren - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("GrandChildren - getSnapShotBeforeUpdate");
    return { message: "fromGrandParentSnapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("GrandChildren - componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("GrandChildren - rendering");
    return <div>{this.state.component}</div>;
  }
}

export default GrandChildren;
