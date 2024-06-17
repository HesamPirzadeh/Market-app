import { IoIosSearch } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";

import { useProduct } from "../context/ProductContext";

import styles from "../css/ProductPages.module.css";
import { useEffect, useState } from "react";
import {
  categoryProduct,
  initialQuery,
  queryObject,
  searchProduct,
} from "../helpers/helpers";
import { useParams, useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProduct();

  const [display, setDisplay] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplay(products);
    setQuery(initialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    console.log(query);
    setInput(query.input || ""); 
    setSearchParams(query);
    let search = searchProduct(products, query.input);
    search = categoryProduct(search, query.category);
    setDisplay(search);
  }, [query]);

  const searchHanlder = () => {
    setQuery((query) => queryObject(query, { input }));
  };

  const CategoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => queryObject(query, { category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHanlder}>
          <IoIosSearch />
        </button>
      </div>
      <div className={styles.container}>
        {!display.length && <Loader />}
        <div className={styles.products}>
          {display.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
          </div>
          <p>Categories</p>
        </div>
        <ul onClick={CategoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
      </div>
    </>
  );
}

export default ProductsPage;
