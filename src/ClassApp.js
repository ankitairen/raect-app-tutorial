import React, { Component } from "react";
import Test from "./Test";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// import UpdateWorkFlowParent from "./UpdateWorkflow/Parent";
import ParentComponent from "./HOC/ParentComponent";

class ClassApp extends Component {
  state = {
    name: "Sameer"
  };
  render() {
    return (
      <div>
        Hello {this.state.name}
        <Test name="Ankit" />
        <ErrorBoundary>
          <Test name="Puneet" />
        </ErrorBoundary>
        {/* <UpdateWorkFlowParent /> */}
        <ParentComponent />
      </div>
    );
  }
}

export default ClassApp;
