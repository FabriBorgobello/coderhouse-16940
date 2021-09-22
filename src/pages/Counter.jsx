import * as React from "react";
import ButtonClickCounter from "../components/ButtonClickCounter";
import ClickCounter from "../components/ClickCounter/ClickCounter";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = (e, saludito) => {
    console.log(e, saludito);
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <ClickCounter counter={counter} />
      <ButtonClickCounter otraCosa={handleClick} />
    </div>
  );
};

export default Counter;
