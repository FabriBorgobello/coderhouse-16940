import * as React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pablo",
      year: 1990,
    };
  }

  // componentDidMount() {
  //   console.log("El componente se ha renderizado.");
  // }
  // componentDidUpdate() {
  //   console.log("El componente ha sido modificado.");
  // }
  // componentWillUnmount() {
  //   console.log("El componente va a desmontarse");
  // }

  render() {
    return (
      <header className="main-header">
        <p className="greeting">¡Bienvenid@, {this.props.name}!</p>
        <p>{this.state.name}</p>
      </header>
    );
  }
}
export default Header;
