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
import Cart from "./pages/Cart";
import BlankPage from "./pages/BlankPage";
import { CartProvider } from "./context/CartContext";
import FruitsPage from "./pages/Frutas";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/windowsize" component={WindowSize} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/context" component={Context} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/blank" component={BlankPage} />
          <Route exact path="/fruits" component={FruitsPage} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
