import { Link, useParams } from "react-router-dom";
import { useState, useRef } from "react";

function ProductInfo(props) {
  const params = useParams();
  const product = props.products[params.id - 1];

  const [value, setValue] = useState(1);

  function submitHandler(event) {
    event.preventDefault();

    props.setCartItems((prevCart) => [
      ...prevCart,
      { ...product, quantity: value, totalPrice: product.price * value },
    ]);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    product && (
      <div>
        <img src={product.image} alt="" />
        <div>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <form action="" onSubmit={submitHandler}>
            <input
              type="number"
              onChange={handleChange}
              value={value}
              min={1}
              max={5}
            />
            <p>${product.price * value}</p>
            <button>Add to Cart</button>
          </form>
        </div>
      </div>
    )
  );
}

export default ProductInfo;
