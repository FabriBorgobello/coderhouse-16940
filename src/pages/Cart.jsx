import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Cart = () => {
  const newOrder = {
    buyer: { name: "Oscar", phone: 35112345678, email: "juan@email.com" },
    items: [
      { item: "Camisa", quantity: 2 },
      { item: "Paraguas", quantity: 10 },
    ],
    total: 10000,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  };

  const handleCheckout = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    // Para agregarlo con un ID autogenerado por Firestore.
    ordersCollection
      .add(newOrder)
      .then((docRef) => console.log(docRef))
      .catch((error) => console.log(error));

    // Para agregarlo con un ID que elegimos nosotros:
    // ordersCollection
    //   .doc("UnIdQuePusimosNosotros")
    //   .set(newOrder)
    //   .then((docRef) => console.log(docRef))
    //   .catch((error) => console.log(error));
  };

  const handleUpdate = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const productRef = ordersCollection.doc("UnIdQuePusimosNosotros");

    productRef.update({ price: 20000 });
    // productRef.delete() para borrar el documento.
  };
  const handleBatch = () => {
    console.log("Se crea el batch");
    const db = getFirestore();
    const batch = db.batch();

    const ordersCollection = db.collection("orders");
    const productRef = ordersCollection.doc("UnIdQuePusimosNosotros");
    const productRef2 = ordersCollection.doc("T3gwZWHI5DdysZy6xDLB");

    console.log("Se añaden operaciones");
    batch.set(productRef, { datoNuevo: "Esto viene desde el batch" });
    batch.update(productRef2, { buyer: { name: "Agostina" } });

    setTimeout(() => {
      console.log("Se hace el commit.");
      batch.commit().then((response) => console.log(response));
    }, 5000);
  };
  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <h1>Cart</h1>
      <button onClick={handleCheckout} style={{ height: "100px", width: "300px", fontSize: "2rem", cursor: "pointer" }}>
        Finalizar la compra
      </button>
      <button onClick={handleUpdate} style={{ height: "100px", width: "300px", fontSize: "2rem", cursor: "pointer" }}>
        Modificar orden
      </button>
      <button onClick={handleBatch} style={{ height: "100px", width: "300px", fontSize: "2rem", cursor: "pointer" }}>
        Probar batch
      </button>
    </div>
  );
};
export default Cart;
