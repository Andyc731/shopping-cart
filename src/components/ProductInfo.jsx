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

  function upButtonHandler() {
    if (value < 5) setValue((prevValue) => prevValue + 1);
  }

  function downButtonHandler() {
    if (value > 1) setValue((prevValue) => prevValue - 1);
  }

  return (
    product && (
      <div className="flex lg:w-9/12 ml-auto mr-auto p-10 items-center justify-around relative">
        <img
          src={product.image}
          alt=""
          className="w-1/3 object-contain mr-16"
        />
        <div className="max-w-screen-sm">
          <h4 className="text-lg font-bold mb-4">{product.title}</h4>
          <p className="mb-4">{product.description}</p>
          <p className="mb-3">${product.price.toFixed(2)}</p>
          <form action="" onSubmit={submitHandler}>
            <div className="flex">
              <button
                type="button"
                className="w-5 h-5"
                onClick={upButtonHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="transform -rotate-90"
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </button>
              <p className="w-6 text-center">{value}</p>
              <button
                type="button"
                className="w-5 h-5"
                onClick={downButtonHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="transform rotate-90"
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </button>
            </div>
            <button
              ref={submitButton}
              className="w-32 bg-blue-300 rounded-lg p-2 mt-4"
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
