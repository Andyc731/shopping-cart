import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Cart(props) {
  const modal = useRef();
  const [totalPrice, setTotalPrice] = useState([]);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

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

  return (
    <div>
      <div onClick={showModal} className="cursor-pointer">
        <img
          src="/src/assets/shopping-cart.svg"
          alt=""
          className="w-9 z-0 relative"
        />
        <div className="-mt-4 ml-5 bg-red-500 rounded-full text-center p-1 w-5 h-5 flex justify-center items-center text-xs z-50 relative">
          {props.cartItems.length}
        </div>
      </div>
      <dialog
        ref={modal}
        className={`h-full max-h-full flex-end ml-auto mr-0 transition-transform ${
          isDialogVisible ? "" : "transform translate-x-full"
        }`}
      >
        {props.cartItems.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.totalPrice}</p>
            </div>
          );
        })}

        {props.cartItems && <p>{totalPrice}</p>}
      </dialog>
    </div>
  );
}

export default Cart;
