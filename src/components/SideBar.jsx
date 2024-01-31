function SideBar(props) {
  const categoryArray = [
    "All Products",
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  const products = [...props.products];

  function categoryClickHandler(event) {
    const newArray = [];
    products.forEach((obj) => {
      if (obj.category === event.target.textContent.toLowerCase()) {
        newArray.push(obj);
      }
    });

    const setProducts = props.setProducts;
    setProducts(newArray);

    if (event.target.textContent === "All Products") {
      setProducts(products);
    }
  }

  return (
    <div className="bg-green-400 m-0">
      {categoryArray.map((category, index) => {
        return (
          <button onClick={categoryClickHandler} key={index} className="block">
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default SideBar;
