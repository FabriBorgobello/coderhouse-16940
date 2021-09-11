import * as React from "react";
import "./App.scss";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import Header from "./components/Header/Header";
import WidthAndHeight from "./components/MyComponent/WidthAndHeight";
import NavBar from "./components/NavBar/NavBar";
import CardContainers from "./containers/CardContainers";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <WidthAndHeight />
      <ClickCounter />
      <Header name="Laura" />
      <CardContainers/>
    </div>
  );
};

export default App;
