import * as React from "react";

const ClickCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem 0" }}>
      <p>Clicks: {counter}</p>
      <br />
      <button onClick={handleClick}>Sumar</button>
    </div>
  );
};

export default ClickCounter;
