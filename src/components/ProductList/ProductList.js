import React from "react";
import Product from "../Product/Product";

function ProductList(props) {
    return props.products.map((item, index) => {
        return <Product title={item.title} price={item.price} change={(event) => props.change(event, item.id)} click={() => props.click(index)} key={index} />;
    });
}

export default ProductList;
