import React, { useState, Fragment, useEffect } from "react";

const sampleApp = props => {
  const addFruit = () => {
    setFruits(["Apple", "Orange", "Mango"]);
  };
  useEffect(() => {
    console.log("After component did mount");
  }, []);

  useEffect(() => {
    console.log("During component did update");
  }, [props]);

  useEffect(() => {
    return () => {
      console.log("component will unmout");
    };
  }, []);

  const [fruits, setFruits] = useState(["Apple", "Mango"]);
  return (
    <Fragment>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </Fragment>
  );
};

export default sampleApp;
