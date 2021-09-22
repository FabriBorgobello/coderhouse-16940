import * as React from "react";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import CardContainers from "../containers/CardContainers";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <Header name="Laura" />
      <div>
        <p>Categoria elegida: {selectedCategory || "No has elegido ninguna categoría."}</p>
      </div>
      <Categories setSelectedCategory={setSelectedCategory} />
      <CardContainers selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
