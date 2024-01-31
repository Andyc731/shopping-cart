import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Content() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main
      className="mb-auto grid gap-10"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))" }}
    >
      {products.map((item, index) => {
        return (
          <div key={index} className="w-60 flex flex-col justify-between p-3">
            <img src={item.image} alt="" className="h-60 object-contain" />
            <p className="mt-auto mb-0">{item.title}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </main>
  );
}

export default Content;
