import * as React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return <header className="main-header">¡Bienvenid@, {this.props.name}!</header>;
  }
}
export default Header;
