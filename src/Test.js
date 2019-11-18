import React, { Component } from "react";

class Test extends Component {
  clickHandler = event => {
    alert("Hello");
    throw new Error("something went wrong");
  };

  render() {
    // if (this.props.name === 'Puneet') {
    //   throw new Error('not proper');
    // }
    return (
      <div
        onClick={event => {
          this.clickHandler(event);
        }}
      >
        Hello {this.props.name}
      </div>
    );
  }
}

export default Test;
