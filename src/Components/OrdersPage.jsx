import React, { useEffect, useState } from "react";

function OrdersPage({ openProducts }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/orders/user/1")
      .then(res => res.json())
      .then(data => {
        console.log("Orders Data", data);
        setOrders(data);
      });
  }, []);

  return (
    <>
      <h2>MY ORDERS</h2>

      {orders.length === 0 && <p>No Orders Yet</p>}

      {orders.map(order => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px"
          }}
        >
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Total Amount:</b> ₹{order.totalAmount}</p>
          <p><b>Status:</b> {order.status}</p>
          <p><b>Date:</b> {order.createdAt}</p>

     
          {order.items && order.items.map(item => (
            <div key={item.id} style={{ marginTop: "10px" }}>
              <img
                src={item.product.imageUrl}
                alt={item.product.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover"
            }}
              />
              <p>{item.product.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.product.price}</p>
            </div>
            ))}
           </div>
           ))}

          <button onClick={openProducts}>Back To Products</button>
         </>
  );
}

export default OrdersPage;