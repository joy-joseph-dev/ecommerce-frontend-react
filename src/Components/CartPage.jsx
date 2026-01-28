
import React from "react";
import{ useEffect, useState } from "react";

function CartPage({openProducts, openOrders}) {
  const [cart, setCart] = useState(null);


  function loadCart() {
    fetch("http://localhost:8080/cart/1")
      .then(res => res.json())
      .then(data => {
        console.log("CART DATA", data);
        setCart(data);
      })
      .catch(err => console.error(err));
  }
  function removeItem(cartItemId) {
  fetch(`http://localhost:8080/cart/item/${cartItemId}`, {
    method: "DELETE"
  })
  .then(() => {
    loadCart();
  });
}

 
  function placeOrder() {
    fetch("http://localhost:8080/orders/place/1", {
      method: "POST",
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Order failed");
        }
        return res.json();
      })
      .then(() => {
        alert("Order placed successfully ");
        loadCart(); 
      })
      .catch(() => {
        alert("Something went wrong");
      });
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <h2>My Cart</h2>

      {!cart && <p>Loading...</p>}

      {cart && cart.items.length === 0 && <p>Cart is Empty</p>}

      {cart &&
        cart.items.map(item => (
          <div key={item.id}>
            <p>{item.product.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₹{item.product.price}</p>
            <button onClick={()=> removeItem(item.id)}> Drop Item</button>

            <img
            src={item.product.imageUrl}
            alt={item.product.name}
            style={{ width: "120px", height: "120px", objectFit: "cover" }}/>
          </div>
        ))}

      {cart && cart.items.length > 0 && (
        <button onClick={placeOrder}>
          Order Products
        </button>
      )}

      {cart && <h3>Total: ₹{cart.totalPrice}</h3>}
      <button onClick={openProducts}>Back To Products </button>
      <button onClick={openOrders}>Go To Orders</button>
    </>
  );
}

export default CartPage;