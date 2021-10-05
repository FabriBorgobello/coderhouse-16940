import * as React from "react";
import MemoizedComponent from "../components/MemoizedComponent/MemoizedComponent";

const BlankPage = () => {
  const [inputValue, setInputValue] = React.useState("Valor default");
  const [nombre] = React.useState("Carlitos");

  const [password, setPassword] = React.useState("");
  const [userName, setuserName] = React.useState("");

  // Objetos y arrays.
  const person = React.useMemo(() => ({ name: "Esmeralda", age: 20 }), []);

  // Funciones
  const saludar = React.useCallback(() => {
    console.log(`Holis ${nombre} :)`);
  }, [nombre]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`El usuario es: ${userName} y la contraseña es ${password}`);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <h1>Componente padre</h1>
      <input type="text" placeholder="Escribí algo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <MemoizedComponent person={person} saludar={saludar} />

      {/*  */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input type="text" id="user" value={userName} onChange={(e) => setuserName(e.target.value)} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default BlankPage;
