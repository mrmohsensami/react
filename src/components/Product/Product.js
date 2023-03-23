import React from "react";
import "./Product.css";

function Product(props) {
    console.log("Product.js render");
    return (
        <div className="product">
            <h2 onClick={props.click}>Product Name: {props.title}</h2>
            <p onClick={props.click}>Product Price: {props.price}</p>
            <input type="text" onChange={props.change} value={props.title} />
        </div>
    );
}

export default Product;
