import { TbListDetails } from "react-icons/tb";
import { MdDeleteOutline, MdShoppingCartCheckout } from "react-icons/md";

import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helpers/helpers";

import styles from "../css/Card.module.css";

import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();
  console.log(state);

  const quantity = productQuantity(state, id);

  const buyHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h3>{shortenText(title)}</h3>
      <p>$ {price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => buyHandler("REMOVED_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => buyHandler("DECREASE")}>-</button>
          )}
          {<span>{!!quantity && quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => buyHandler("ADD_ITEM")}>
              <MdShoppingCartCheckout />
            </button>
          ) : (
            <button onClick={() => buyHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
