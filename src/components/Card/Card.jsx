import * as React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, image, comprar, price }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>$ {price}</p>
      <button className={styles.button} onClick={() => comprar(title)}>
        ¡Comprar ahora!
      </button>
    </div>
  );
};

export default Card;
