import { useEffect, useState } from "react";
import SideBar from "./SideBar";

function Products(props) {
  const [displayProducts, setDisplayProducts] = useState([...props.products]);
  return (
    <main className="grid" style={{ gridTemplateColumns: "300px 1fr" }}>
      <SideBar
        products={props.products}
        setProducts={setDisplayProducts}
      ></SideBar>
      <div
        className="mb-auto grid gap-8 p-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))" }}
      >
        {displayProducts.map((item, index) => {
          return (
            <div
              key={index}
              className="w-60 flex flex-col justify-between p-3 shadow-xl"
            >
              <img src={item.image} alt="" className="h-60 object-contain" />
              <p className="mt-auto mb-0">{item.title}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
