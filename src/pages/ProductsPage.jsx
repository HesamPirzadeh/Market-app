import { useParams, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useProduct } from "../context/ProductContext";

import {
  categoryProduct,
  initialQuery,
  searchProduct,
} from "../helpers/helpers";
import InputBox from "../components/InputBox";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "../css/ProductPages.module.css";

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

  return (
    <>
      <InputBox input={input} setInput={setInput} setQuery={setQuery} />
      <div className={styles.container}>
        {!display.length && <Loader />}
        <div className={styles.products}>
          {display.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
