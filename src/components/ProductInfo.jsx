import { Link, useParams } from "react-router-dom";
import { useState, useRef } from "react";

function ProductInfo(props) {
  const params = useParams();
  const product = props.products[params.id - 1];

  const [value, setValue] = useState(1);
  const submitButton = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const TIMEOUT_OFFSET = 1700;

    props.setCartItems((prevCart) => [
      ...prevCart,
      { ...product, quantity: value, totalPrice: product.price * value },
    ]);

    submitButton.current.innerHTML = "&#10003;";
    submitButton.current.disabled = true;
    setTimeout(() => {
      submitButton.current.disabled = false;
      submitButton.current.innerHTML = "Add to Cart";
    }, TIMEOUT_OFFSET);
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
            <button
              ref={submitButton}
              className="w-32 bg-blue-300 rounded-lg p-2"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default ProductInfo;
