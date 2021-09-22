import React from "react";

const Context = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <h1>Context</h1>
      <Square1 />
    </div>
  );
};

export default Context;

const Square1 = () => {
  return (
    <div className="square square1">
      <p>1</p>
      <Square2 />
    </div>
  );
};
const Square2 = () => {
  return (
    <div className="square square2">
      <p>2</p>
      <Square3 />
    </div>
  );
};
const Square3 = () => {
  return (
    <div className="square square3">
      <p>3</p>
      <Square4 />
    </div>
  );
};
const Square4 = () => {
  return (
    <div className="square square4">
      <p>4</p>
      <Square5 />
    </div>
  );
};
const Square5 = () => {
  return (
    <div className="square square5">
      <p>5</p>
    </div>
  );
};
