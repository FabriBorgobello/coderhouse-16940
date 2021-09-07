import * as React from "react";

const Desafio = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <p>Clicks: {counter}</p>
      <button onClick={handleClick}>Sumar</button>
    </div>
  );
};

export default Desafio;
