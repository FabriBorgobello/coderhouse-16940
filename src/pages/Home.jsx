import * as React from "react";
import { Redirect } from "react-router";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import CardContainers from "../containers/CardContainers";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <div>
      <h1>Home</h1>
      <Header name="Laura" />
      <p>Categoria elegida: {selectedCategory}</p>
      <Categories setSelectedCategory={setSelectedCategory} />
      <CardContainers selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
