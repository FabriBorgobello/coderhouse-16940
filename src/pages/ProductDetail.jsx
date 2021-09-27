import * as React from "react";
import { useParams } from "react-router";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const [product, setProduct] = React.useState({});
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const { addItem } = useCart();
  const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Corran.", error))
      .finally(() => setLoading(false));
  }, [id]);

  const addToCart = () => {
    addItem(product, counter);
  };

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <h1>ProductDetail</h1>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <img style={{ width: "500px" }} src={product?.image} alt="producto" />
        <button onClick={addToCart}>Agregar al carrito</button>

        <input type="number" name="counter" id="counter" min="1" max="10" value={counter} onChange={(e) => setCounter(e.target.value)} />
      </div>
    );
  }
};

export default ProductDetail;
