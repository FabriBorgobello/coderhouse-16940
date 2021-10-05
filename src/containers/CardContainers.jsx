import * as React from "react";
import Card from "../components/Card/Card";
import { getFirestore } from "../firebase";

const CardContainers = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("products");
    // const productsCollection = db.collection("products").where("title", "==", "Zapatillas");

    setLoading(true);
    productsCollection
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        if (querySnapshot.empty) {
          console.log("No hay productos");
        } else {
          setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const comprarProducto = (product) => {
    console.log(`Has comprado el producto: ${product}`);
  };

  return (
    <div style={{ maxWidth: "800px", marginInline: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {loading && <p>Cargando...</p>}
        {error && (
          <p>
            Ha habido un error: {error.status} {error.statusText}
          </p>
        )}

        {data?.map((producto) => {
          return (
            <Card
              key={producto.id}
              productId={producto.id}
              title={producto.title}
              description={producto.description}
              image={producto.image}
              price={producto.price}
              comprar={comprarProducto}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CardContainers;

//   const response = await fetch("http://localhost:3001/products", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newProduct),
//   });

//   return response.json();
// };
