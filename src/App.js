import React, { Component } from "react";
import ClassApp from "./ClassApp";
import ReactHookApp from "./ReactHookApp";

class App extends Component {
  render() {
    return (
      <div>
        <ClassApp />
        <ReactHookApp />
      </div>
    );
  }
}

export default App;
