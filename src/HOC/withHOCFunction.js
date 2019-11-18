import React from "react";
import AuxComponent from "./fragmentAlternative";

const withHOCFunction = WrappedComponent => {
  return props => {
    return (
      <AuxComponent>
        <WrappedComponent {...props} />
        <span>Inside Higher Order Function</span>
      </AuxComponent>
    );
  };
};

export default withHOCFunction;
