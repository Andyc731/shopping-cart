import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!props.products.length) {
      return;
    }
    const randomArray = [];

    while (randomArray.length < 5) {
      const randomNum = Math.floor(Math.random() * props.products.length);
      if (!randomArray.includes(props.products[randomNum])) {
        randomArray.push(props.products[randomNum]);
      }
    }
    setProducts(randomArray);
  }, [props.products]);

  return (
    <footer className="grid lg:grid-cols-5 p-10 gap-10 bg-black text-white">
      <aside className="col-span-2">
        <div>logo</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, cumque
          pariatur! Incidunt, ducimus molestiae. Aperiam blanditiis nisi,
          repellat dolorum, assumenda iste aut nihil sint nulla vel nemo magnam!
          Dolorum, laboriosam.
        </p>
        <a href="">facebook</a>
        <a href="">instagram</a>
        <a href="">github</a>
      </aside>
      <ul>
        <li>
          <h3 className="font-bold text-xl">Products</h3>
        </li>
        {props.loading && <p>Loading...</p>}
        {!props.loading && (
          <div>
            {products.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={`/products/${product.id}`}
                  className="block"
                >
                  {product.title.length > 20
                    ? product.title.substring(0, 20)
                    : product.title}
                </Link>
              );
            })}
          </div>
        )}
      </ul>

      <ul>
        <li>
          <h3 className="font-bold text-xl">Help</h3>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        <li>
          <Link>Payment Policy</Link>
        </li>
      </ul>
      <ul>
        <li>
          <h3 className="font-bold text-xl">Contact</h3>
        </li>
        <li>andychc731@gmail.com</li>
        <li>123-123-1234</li>
      </ul>
    </footer>
  );
}

export default Footer;
