import { useState } from "react";
import ProductsPage from "./Components/ProductsPage";
import CartPage from "./Components/CartPage";
import OrdersPage from "./Components/OrdersPage";

function App() {
  const [currentPage, setCurrentPage] = useState("PRODUCTS");

  return (
    <>
      {currentPage === "PRODUCTS" && (
        <ProductsPage openCart={() => setCurrentPage("CART")} />
      )}

      {currentPage === "CART" && (
        <CartPage
          openProducts={() => setCurrentPage("PRODUCTS")}
          openOrders={() => setCurrentPage("ORDERS")}
        />
      )}

      {currentPage === "ORDERS" && (
        <OrdersPage openProducts={() => setCurrentPage("PRODUCTS")} />
      )}
    </>
  );
}

export default App;