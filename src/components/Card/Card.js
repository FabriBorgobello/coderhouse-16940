import * as React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, image, comprar }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.image} src={image} alt={title} />
      <p className={styles.description}>{description}</p>
      <button className={styles.button} onClick={() => comprar(title)}>
        ¡Comprar ahora!
      </button>
    </div>
  );
};

export default Card;
