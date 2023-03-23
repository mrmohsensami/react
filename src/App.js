import React from "react";
import "./App.css";

import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import Wrapper from "./hoc/Wrapper";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("App.js constructor");
    }
    state = {
        products: [
            { id: 1, title: "Book 1", price: 99 },
            { id: 2, title: "Book 2", price: 89 },
            { id: 3, title: "Book 3", price: 79 },
        ],
        showProducts: false,
    };
    componentDidMount() {
        console.log("App.js componentDidMount");
    }
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
        console.log("App.js render");
        return (
            <Wrapper center="center">
                <Main click={this.toggleProductHandler} />
                {this.state.showProducts ? (
                    <div>
                        <ProductList products={this.state.products} click={this.removeProduct} change={this.changeTitleHandler} />
                    </div>
                ) : null}
            </Wrapper>
        );
    }
}

export default App;
