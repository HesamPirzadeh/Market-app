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

const queryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.input === "") {
    const { input, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const initialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const input = searchParams.get("input");
  if (category) query.category = category;
  if (input) query.input = input;
  return query;
};

const sumItem = (product) => {
  const itemCounter = product.reduce((acc, cur) => acc + cur.quantity, 0);
  const toatal = product
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return {itemCounter,toatal}
};

export {
  shortenText,
  searchProduct,
  categoryProduct,
  queryObject,
  initialQuery,
  sumItem,
};
