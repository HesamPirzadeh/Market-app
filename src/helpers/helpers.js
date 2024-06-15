const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProduct = (products, search) => {
  if (!search) return products;
  const filterProduct = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return filterProduct;
};

const categoryProduct = (products, category) => {
  if (!category) return products;
  const filterProduct = products.filter((p) => p.category === category);
  return filterProduct;
};


const queryObject = (currentQuery,newQuery)=>{
  if (newQuery.category === "all") {
    const {category,...rest} = currentQuery
    return rest
  }
  if (newQuery.input ==="") {
    const{input,...rest}=currentQuery
    return rest
  }
    return {...currentQuery,...newQuery}
}



export { shortenText, searchProduct, categoryProduct,queryObject };
