import * as React from "react";
import "./Card.css";

const Card = ({ title, description, image, comprar }) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <button onClick={comprar}>¡Comprar ahora!</button>
    </div>
  );
};

export default Card;
