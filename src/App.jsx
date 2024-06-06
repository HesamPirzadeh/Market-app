import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route index element={<Navigate to="products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
