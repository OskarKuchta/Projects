import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Card from "./Card";

function App() {
    return (
        <main>
            <Card />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
)