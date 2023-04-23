import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Top from "./Top";
import { Bottom } from "./Bottom";

function App() {
    return (
        <main>
            <Top />
            <Bottom />
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
)