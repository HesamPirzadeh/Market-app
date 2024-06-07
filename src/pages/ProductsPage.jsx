import { IoIosSearch } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";

import { useProduct } from "../context/ProductContext";

import styles from "../css/ProductPages.module.css";
import { useState } from "react";

function ProductsPage() {
  const [input, setInput] = useState([]);
  const products = useProduct();


  const searchHanlder =()=>{
    console.log("search");
  }

  const CategoryHandler =(e)=>{
    const {tagName} = e.target 
    const list = e.target.innerText.toLowerCase()
    
    if (tagName !== "LI") return 
  }

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
        {!products.length && <Loader />}
        <div className={styles.products}>
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div><FaListUl/></div>
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
