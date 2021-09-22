import * as React from "react";
import WidthAndHeight from "../components/WidthAndHeight/WidthAndHeight";

const WindowSize = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <h1>WindowSize</h1>
      <WidthAndHeight />
    </div>
  );
};

export default WindowSize;
