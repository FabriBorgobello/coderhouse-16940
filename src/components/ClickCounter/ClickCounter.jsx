import * as React from "react";

const ClickCounter = ({ counter }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem 0" }}>
      <p>Clicks: {counter}</p>
      <br />
    </div>
  );
};

export default ClickCounter;
