import { TbListDetails } from "react-icons/tb";
import { MdShoppingCartCheckout } from "react-icons/md";

import { Link } from "react-router-dom";
import { shortenText } from "../helpers/helpers";

import styles from "../css/Card.module.css";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, image, title, price } = data;
  
  const [state,dispatch]=useCart()

  const buyHandler=()=>{
    dispatch({type:"ADD_ITEM",payload:data})
  }

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h3>{shortenText(title)}</h3>
      <p>{price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={buyHandler}>
            <MdShoppingCartCheckout />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
