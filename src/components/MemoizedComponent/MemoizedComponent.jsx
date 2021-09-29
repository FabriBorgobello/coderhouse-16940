import * as React from "react";

const MemoizedComponent = React.memo(({ person, saludar }) => {
  const [counter, setCounter] = React.useState(0);
  const renders = React.useRef(0);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h2>Componente hijo</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>+1</button>
      <br />
      <br />
      <p>Renders: {renders.current++}</p>
      <br />
      <p>El nombre es: {person.name}</p>
      <p>La edad es: {person.age}</p>
      <br />
      <br />
      <button onClick={saludar}>Saludar!</button>
    </div>
  );
});

export default MemoizedComponent;
