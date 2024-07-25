import React from "react";
import { useCart } from "../context/CartContext";
import Basket from "../components/Basket";
import BasketSideBar from "../components/BasketSideBar";

import styles from "../css/Checkout.module.css";

function Checkout() {
  const [state, dispatch] = useCart();
  console.log(state);

  const clickHandler = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  if (!state.itemCounter) {
    return <div className={styles.container}>empty</div>;
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItem.map((p) => (
          <Basket key={p.id} data={p} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
