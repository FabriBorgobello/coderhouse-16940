import * as React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import WindowSize from "./pages/WindowSize";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer/Footer";
import Context from "./pages/Context";
import BlankPage from "./pages/BlankPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/windowsize" component={WindowSize} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/context" component={Context} />
        <Route exact path="/blank" component={BlankPage} />

        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
