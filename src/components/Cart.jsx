import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import shoppingCart from "../assets/shopping-cart.svg";

function Cart(props) {
  const modal = useRef();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const windowLarge = useMediaQuery({ minWidth: 1024 });

  function showModal() {
    modal.current.showModal();
    setIsDialogVisible(true);
  }

  useEffect(() => {
    modal.current.addEventListener("click", (event) => {
      const dialogDimensions = modal.current.getBoundingClientRect();
      if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
      ) {
        setIsDialogVisible(false);
        setTimeout(() => {
          modal.current.close();
        }, 200);
      }
    });
  }, []);

  useEffect(() => {
    if (props.cartItems && props.cartItems.length > 0) {
      const total = props.cartItems.reduce(
        (acc, current) => acc + current.totalPrice,
        0
      );
      setTotalPrice(total);
    }
  }, [props.cartItems]);

  function deleteItem(e, index) {
    const updatedCart = [...props.cartItems];
    updatedCart.splice(index, 1);
    props.setCartItems(updatedCart);
    if (updatedCart.length === 0) {
      setTotalPrice(0);
    }
  }

  function quantityChangeHandler(e, index, isIncrease) {
    const updatedCart = [...props.cartItems];
    const quant = parseFloat(updatedCart[index].quantity);

    if (isIncrease && quant < 5) {
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: quant + 1,
        totalPrice: (quant + 1) * updatedCart[index].price,
      };
    } else if (!isIncrease && quant > 1) {
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: quant - 1,
        totalPrice: (quant - 1) * updatedCart[index].price,
      };
    }

    props.setCartItems(updatedCart);
  }

  return (
    <div>
      <div onClick={showModal} className="cursor-pointer">
        <img src={shoppingCart} alt="" className="w-9 z-0 relative" />
        <div className="-mt-4 ml-5 bg-red-500 rounded-full text-center p-1 w-5 h-5 flex justify-center items-center text-xs z-50 relative">
          {props.cartItems.length}
        </div>
      </div>
      <dialog
        ref={modal}
        className={`lg:h-full lg:max-h-full lg:ml-auto lg:mr-0 lg:w-1/4 transition-transform w-full max-w-full h-2/4 mt-auto mb-0 duration-200${
          isDialogVisible
            ? ""
            : `transform ${
                windowLarge ? "translate-x-full" : "translate-y-full"
              }`
        }`}
      >
        <div className="flex flex-col items-center justify-between min-h-full">
          <h2>Cart</h2>
          <div className="mb-auto">
            {props.cartItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-around shadow-lg w-11/12 m-5 relative p-4 items-center"
                >
                  <img src={item.image} alt="" className="w-1/4" />
                  <div>
                    <button
                      className="absolute top-0 right-4"
                      onClick={(e) => deleteItem(e, index)}
                    >
                      X
                    </button>
                    <h4 className="w-48 h-6 overflow-hidden">{item.title}</h4>
                    <div className="flex justify-between">
                      <p>Per:</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Quantity:</p>
                      <p>{item.quantity}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total:</p>
                      <p>${item.totalPrice.toFixed(2)}</p>
                    </div>
                    <button
                      className="bg-green-500 w-10"
                      onClick={(e) => quantityChangeHandler(e, index, true)}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 w-10"
                      onClick={(e) => quantityChangeHandler(e, index, false)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between w-9/12 mt-4">
            <p>Subtotal:</p>
            <p className="">${totalPrice.toFixed(2)}</p>
          </div>
          <button className="w-3/4 bg-green-400 rounded-lg h-12 m-4">
            Checkout
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Cart;
