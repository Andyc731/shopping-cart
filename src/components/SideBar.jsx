import { useState } from "react";

function SideBar(props) {
  const categoryArray = [
    "All Products",
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const products = [...props.products];

  function categoryClickHandler(event) {
    const clickedCategory = event.target.textContent;

    if (clickedCategory === "All Products") {
      setSelectedCategory(clickedCategory);
      props.setProducts(products);
    } else {
      const newArray = products.filter(
        (obj) => obj.category === clickedCategory.toLowerCase()
      );
      setSelectedCategory(clickedCategory);
      props.setProducts(newArray);
    }
  }

  return (
    <div className="bg-green-400 m-0 p-16">
      {categoryArray.map((category, index) => {
        return (
          <button
            onClick={categoryClickHandler}
            key={index}
            className={
              selectedCategory === category
                ? "font-bold block mt-2"
                : "block mt-2"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default SideBar;
