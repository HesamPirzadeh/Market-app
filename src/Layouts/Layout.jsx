import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "../css/Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Hesam Shop</Link>
        <Link to="checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}> Developed By Hesam</footer>
    </>
  );
}

export default Layout;
