import * as React from "react";

const Categories = ({ setSelectedCategory }) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Seleccione una categoria
        </option>
        {categories?.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
