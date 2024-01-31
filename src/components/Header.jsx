import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header(props) {
  return (
    <header className="flex justify-between bg-purple-300">
      <Link to="/">
        <div>logo</div>
      </Link>
      <ul className="flex gap-x-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <div>
        <Cart
          cartItems={props.cartItems}
          setCartItems={props.setCartItems}
        ></Cart>
      </div>
    </header>
  );
}

export default Header;
