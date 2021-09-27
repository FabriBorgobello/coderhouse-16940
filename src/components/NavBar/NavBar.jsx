import * as React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const { getQuantity } = useCart();

  return (
    <nav className="navbar">
      <span className="brand">
        <Link to="/">Mi ecommerce</Link>
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/windowsize">WindowSize</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
        <li>
          {getQuantity()}
          <Link to="/cart"> - Carrito</Link>
        </li>
        <li>
          <Link to="/blank">Página en blanco</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
