import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProduct } from "../context/ProductContext";

import styles from "../css/ProductPages.module.css";

function ProductsPage() {
  const products = useProduct();

  return (
    <div className={styles.container}>
      {!products.length && <Loader/>}
      <div className={styles.products}>
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
