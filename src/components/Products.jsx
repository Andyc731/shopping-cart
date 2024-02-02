import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SelectBar from "./SelectBar";

function Products(props) {
  const [displayProducts, setDisplayProducts] = useState([]);
  const windowLarge = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setDisplayProducts(props.products);
  }, [props.products]);

  return (
    displayProducts && (
      <main
        className="grid flex-1"
        style={
          windowLarge
            ? { gridTemplateColumns: "300px 1fr" }
            : { gridTemplateRows: "100px 1fr" }
        }
      >
        {windowLarge && (
          <SideBar
            products={props.products}
            setProducts={setDisplayProducts}
          ></SideBar>
        )}
        {!windowLarge && (
          <SelectBar
            products={props.products}
            setProducts={setDisplayProducts}
          ></SelectBar>
        )}
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
