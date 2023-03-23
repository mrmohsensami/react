import React, { useEffect, useRef } from "react";
import Container from "../../hoc/Container";

function Main(props) {
    const btnRef = useRef(null);
    useEffect(() => {
        btnRef.current.click();
    }, []);
    const btn = {
        backgroundColor: "#7b1fa2",
        color: "#fff",
        borderRadius: "3px",
        padding: "12px 18px",
    };
    return (
        <Container>
            <h1>App</h1>
            <button ref={btnRef} style={btn} onClick={props.click}>
                Show/Hide Products
            </button>
        </Container>
    );
}

export default Main;
