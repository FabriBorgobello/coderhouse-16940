import * as React from "react";
import { useParams } from "react-router";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../firebase";

const ProductDetail = () => {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const { addItem } = useCart();
  const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    // Apuntamos a la base de datos.
    const db = getFirestore();
    // Apuntamos a una colección.
    const productsCollection = db.collection("products");
    // Apuntamos a un elemento en específico.
    const product = productsCollection.doc(id);

    // Traemos los datos del producto.
    product
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El producto no existe");
        } else {
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  const addToCart = () => {
    addItem(product, counter);
  };

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div style={{ minHeight: "calc(100vh - 100px)", display: "flex" }}>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h1>{product?.title}</h1>
          <br />
          <p>{product?.description}</p>
          <br />
          <input type="number" name="counter" id="counter" min="1" max="10" value={counter} onChange={(e) => setCounter(e.target.value)} />
          <br />
          <button onClick={addToCart}>Agregar al carrito</button>
        </div>
        <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img style={{ width: "500px" }} src={product?.image} alt="producto" />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
