import React from "react";
import { useState,useEffect } from "react";
function ProductsPage({openCart}){
    const[products, setProducts]= useState([]);
useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then(res =>res.json())
    .then(data =>setProducts(data));
},[])
const addToCart = (productId)=>{fetch(`http://localhost:8080/cart/add?userId=1&productId=${productId}&quantity=1`,
    {
        method: "POST"
    })
    .then(()=>{
        alert("product Added To Cart");
    });
}
    return(
        <>
        <h2>Products</h2>
        {
            products.map(product =>(
                <div key={product.id}>
                <p>{product.name}</p> 
                <p>${product.price}</p>   
                <button onClick={()=> addToCart(product.id)}>Add to Cart</button>
                <button onClick={openCart}>Go To Cart </button>

                <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                 </div>
            ))
        }
       
        </>
    );
}
export default ProductsPage;