import * as React from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleClick = () => {
    if (isLoggedIn === true) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <nav className="navbar">
      <span className="brand">Mi ecommerce </span>
      {isLoggedIn.toString()}
      <button onClick={handleClick}>Cambiar estado</button>
    </nav>
  );
};

export default NavBar;
