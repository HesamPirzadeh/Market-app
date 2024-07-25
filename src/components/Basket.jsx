import { shortenText } from "../helpers/helpers";

import { MdDeleteOutline } from "react-icons/md";

import styles from "../css/Basket.module.css"

function Basket({ data,clickHandler }) {
    const {image,title,quantity}= data
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.action}>
        {quantity === 1 && (
          <button onClick={()=>clickHandler("REMOVED_ITEM",data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && <button onClick={()=>clickHandler("DECREASE",data)}>-</button>}
        {<span>{quantity}</span>}
        <button onClick={()=>clickHandler("INCREASE",data)}>+</button>
      </div>
    </div>
  );
}

export default Basket;
