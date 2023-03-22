import React from "react";
import "./App.css";

import Product from "./components/Product/Product";

class App extends React.Component {
    state = {
        products: [
            { id: 1, title: "Book 1", price: 99 },
            { id: 2, title: "Book 2", price: 89 },
            { id: 3, title: "Book 3", price: 79 },
        ],
        showProducts: false,
    };
    toggleProductHandler = () => {
        const show = this.state.showProducts;
        this.setState({ showProducts: !show });
    };
    removeProduct = (index) => {
        const products = [...this.state.products];
        products.splice(index, 1);
        this.setState({ products });
    };
    changeTitleHandler = (event, id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id;
        });

        const product = {
            ...this.state.products[productIndex],
        };

        product.title = event.target.value;

        const products = [...this.state.products];
        products[productIndex] = product;

        this.setState({ products: products });
    };
    render() {
        const btn = {
            backgroundColor: "#7b1fa2",
            color: "#fff",
            borderRadius: "3px",
            padding: "12px 18px",
        };
        return (
            <div className="center">
                <h1>App</h1>
                <button style={btn} onClick={this.toggleProductHandler}>
                    Show/Hide Products
                </button>
                {this.state.showProducts ? (
                    <div>
                        {this.state.products.map((item, index) => {
                            return <Product title={item.title} price={item.price} change={(event) => this.changeTitleHandler(event, item.id)} click={() => this.removeProduct(index)} key={index} />;
                        })}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
