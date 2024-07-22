import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader.jsx";

import { Link, useParams } from "react-router-dom";
import { useProductDetasil } from "../context/ProductContext";

import styles from "../css/DetailPage.module.css";

function DetailPage() {
  const { id } = useParams();
  const result = useProductDetasil(+id);

  console.log(result);
  if (!result) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={result.image} alt={result.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{result.title}</h3>
        <p className={styles.description}>{result.description}</p>
        <div>
          <p className={styles.category}>
            <SiOpenproject />
            {result.category}
          </p>
        </div>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {result.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
