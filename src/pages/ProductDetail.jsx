import * as React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [product, setProduct] = React.useState({});
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Corran.", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div>
        <h1>ProductDetail</h1>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <img src={product?.image} alt="producto" />
      </div>
    );
  }
};

export default ProductDetail;
