import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header(props) {
  return (
    <header className="flex justify-between bg-purple-300 items-center max-h-20">
      <Link to="/">
        <div>logo</div>
      </Link>
      <ul className="flex gap-x-3 ml-auto mr-10">
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
      <div className="m-10">
        <Cart
          cartItems={props.cartItems}
          setCartItems={props.setCartItems}
        ></Cart>
      </div>
    </header>
  );
}

export default Header;
