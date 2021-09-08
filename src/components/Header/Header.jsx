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
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <header className="main-header">
        <p className="greeting">¡Bienvenid@, {this.props.name}!</p>
      </header>
    );
  }
}
export default Header;
