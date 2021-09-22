const ButtonClickCounter = ({ otraCosa }) => {
  return <button onClick={(e) => otraCosa(e, "Hola hola desde el hijo")}>Sumar</button>;
};
export default ButtonClickCounter;
