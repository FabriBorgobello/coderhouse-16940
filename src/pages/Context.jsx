import * as React from "react";
import { UserProvider, useUser } from "../context/UserContext";

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
      <UserProvider>
        <Square2 />
      </UserProvider>
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
  const { userName } = useUser();

  return (
    <div className="square square3">
      <p>3</p>
      <span>User: {userName}</span>

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
  const { userName, saludar } = useUser();

  return (
    <div className="square square5">
      <p>5</p>
      <span>User: {userName}</span>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};
/* <UserContext.Consumer>
{(userName) => (
  <div>
    <p>5</p>
    <span>User: {userName}</span>
  </div>
)}
</UserContext.Consumer> */
