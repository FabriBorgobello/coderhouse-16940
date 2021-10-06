import * as React from "react";

const Fruta = ({ name }) => {
  if (name === "Lechuga") {
    throw new Error("Esto no es una fruta.");
  }

  return <div style={{ height: "50px", fontSize: "2rem" }}>- {name}</div>;
};

export default Fruta;
