import { useState } from "react";

function SelectBar(props) {
  const categoryArray = [
    "All Products",
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  const products = [...props.products];

  function categoryChangeHandler(event) {
    const category = event.target.value;

    if (category === "All Products") {
      props.setProducts(products);
    } else {
      const newArray = products.filter(
        (obj) => obj.category === category.toLowerCase()
      );
      props.setProducts(newArray);
    }
  }

  return (
    <div className=" m-0 p-16">
      <select onChange={categoryChangeHandler} className="p-3">
        {categoryArray.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectBar;
