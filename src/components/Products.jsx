import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function Products(props) {
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    setDisplayProducts(props.products);
  }, [props.products]);
  console.log(props.products, displayProducts);
  return (
    displayProducts && (
      <main className="grid" style={{ gridTemplateColumns: "300px 1fr" }}>
        <SideBar
          products={props.products}
          setProducts={setDisplayProducts}
        ></SideBar>
        <div
          className="mb-auto grid gap-8 p-7"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          }}
        >
          {displayProducts.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/products/${index + 1}`}
                className="w-60 flex flex-col justify-between p-3 shadow-xl"
              >
                <img src={item.image} alt="" className="h-60 object-contain" />
                <p className="mt-auto mb-0">{item.title}</p>
                <p>{item.price}</p>
              </Link>
            );
          })}
        </div>
      </main>
    )
  );
}

export default Products;
