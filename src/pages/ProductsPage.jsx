import { useProduct } from "../context/ProductContext"



function ProductsPage() {
  const products = useProduct()
  console.log(products);
  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage