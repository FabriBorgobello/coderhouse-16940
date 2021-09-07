import * as React from "react";
import "./App.scss";
import Desafio from "./components/Desafio";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardContainers from "./containers/CardContainers";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Desafio />
      <Header name="Laura" />
      <CardContainers unNumero={10} />
    </div>
  );
};

export default App;
