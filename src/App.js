import * as React from "react";
import "./App.scss";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardContainers from "./containers/CardContainers";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ClickCounter />
      <Header name="Laura" />
      <CardContainers unNumero={10} />
    </div>
  );
};

export default App;
