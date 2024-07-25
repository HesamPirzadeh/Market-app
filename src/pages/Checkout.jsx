import React from "react";
import { useCart } from "../context/CartContext";
import Basket from "../components/Basket";

function Checkout() {
  const [state, dispatch] = useCart();
  console.log(state);

  const clickHandler = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };
  return (
    <div>
      <div>
        {state.selectedItem.map((p) => (
          <Basket key={p.id} data={p} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
