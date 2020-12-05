// write code for Welcome component here
import React from "react";
import "../styles/App.css";

const Welcome = (props) => {
  return (
    <>
      <h1> Hey ! {props.name}</h1>
      <h2> Welcome to Newton School</h2>
    </>
  );
};

export default Welcome;
