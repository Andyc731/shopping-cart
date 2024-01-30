import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function Cart() {
  const modal = useRef();

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

  return (
    <div>
      <div onClick={showModal}>blah</div>
      <dialog ref={modal} className="h-full max-h-full flex-end ml-auto mr-0">
        blah
      </dialog>
    </div>
  );
}

export default Cart;
