import * as React from "react";
import Card from "../components/Card/Card";

const CardContainers = ({ unNumero }) => {
  React.useEffect(() => {
    console.log("El componente se ha montado o el valor indicado en el array de dependencias ha cambiado.");
    return () => {
      console.log("El componente se ha desmontado");
    };
  }, [unNumero]);

  const comprarProducto = (product) => {
    console.log(`Has comprado el producto: ${product}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <Card
        title="Mochila"
        description="Esta es la descripción del producto Mochila"
        image="https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/62/64/696264_sized_1800x1200_rev_1.jpg"
        comprar={comprarProducto}
      />
      <Card
        title="Zapatillas"
        description="Esta es la descripción del producto Zapatillas"
        image="https://http2.mlstatic.com/D_NQ_NP_673060-MLA41186638161_032020-O.webp"
        comprar={comprarProducto}
      />
      <Card
        title="Sombrilla"
        description="Esta es la descripción del producto Sombrilla"
        image="https://http2.mlstatic.com/D_NQ_NP_633602-MLA44808294705_022021-O.webp"
        comprar={comprarProducto}
      />{" "}
    </div>
  );
};

export default CardContainers;
