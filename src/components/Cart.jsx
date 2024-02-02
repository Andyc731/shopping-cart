import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Cart(props) {
  const modal = useRef();
  const [totalPrice, setTotalPrice] = useState(0);
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

  function deleteItem(e, index) {
    const updatedCart = [...props.cartItems];
    updatedCart.splice(index, 1);
    props.setCartItems(updatedCart);
  }

  function quantityChange(e, index) {
    const maxQuantity = 5;
    const minQuantity = 1;

    if (e.target.value > maxQuantity) e.target.value = maxQuantity;
    if (e.target.value < minQuantity) e.target.value = minQuantity;
    const value = e.target.value;

    const updatedCart = [...props.cartItems];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: value,
      totalPrice: value * updatedCart[index].price,
    };
    props.setCartItems(updatedCart);
  }

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
        className={`h-full max-h-full ml-auto mr-0 w-1/4 transition-all ${
          isDialogVisible ? "" : "transform translate-x-full"
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
                      <p>${item.price}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Quantity:</p>
                      <input
                        type="number"
                        onChange={(e) => quantityChange(e, index)}
                        className="appearance-none w-9"
                        style={{
                          direction: "rtl",
                        }}
                        value={item.quantity}
                      />
                    </div>
                    <div className="flex justify-between">
                      <p>Total:</p>
                      <p>${item.totalPrice}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between w-9/12 mt-4">
            <p>Subtotal:</p>
            <p className="">${totalPrice}</p>
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
