import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function Products(props) {
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    setDisplayProducts(props.products);
  }, [props.products]);

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
                to={`/products/${item.id}`}
                className="w-60 flex flex-col justify-between p-3 shadow-xl"
              >
                <img src={item.image} alt="" className="h-60 object-contain" />
                <p className="mt-8">${item.price.toFixed(2)}</p>
                <p className="mt-auto mb-0 h-6 overflow-hidden">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </main>
    )
  );
}

export default Products;
