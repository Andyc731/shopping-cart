import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Cart(props) {
  const modal = useRef();
  const [totalPrice, setTotalPrice] = useState([]);

  function showModal() {
    modal.current.showModal();
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
        modal.current.close();
      }
    });
  }, []);

  useEffect(() => {
    console.log(totalPrice);
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
      <div onClick={showModal}>blah</div>
      <dialog ref={modal} className="h-full max-h-full flex-end ml-auto mr-0">
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
