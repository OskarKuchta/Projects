import { useEffect, useState, useRef } from "react";

export function Bottom() {
    const [data, setData] = useState("");
    const [numberAdvice, setNumberAdvice] = useState("");
    const notInitialRender = useRef(false);
    const [addClass, setAddClass] = useState(false);
    useEffect(() => {
        if (notInitialRender.current) {
            const adviceText = document.querySelector(".advice-text");
            const value = data[`${numberAdvice}`];
            adviceText.innerHTML = `"${value}"`;
            const diceElement = document.querySelector(".dice");
            diceElement.classList.add("rotate");
        }
        else {
            notInitialRender.current = true;
        }
    }, [data, numberAdvice]);
    useEffect(() => {
        const rollDice = document.querySelector(".dice");
        if (addClass) {
            rollDice.classList.add("rotate");
        } else {
            rollDice.classList.remove("rotate");
        }
    }, [addClass]);
    const rollAdvice = async () => {
        const adviceNumber = document.querySelector(".advice-number");
        const newNumberAdvice = Math.ceil(Math.random() * 77);
        const response = await fetch("./advices.json", {
            method: "POST"
        });
        const responseData = await response.json();
        setData(responseData);
        setNumberAdvice(newNumberAdvice);
        adviceNumber.innerHTML = `ADVICE #${newNumberAdvice}`;
        setAddClass(true);
        setTimeout(() => {
            setAddClass(false);
        }, 300);
    };
    return (<>
        <svg className="divider" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        <div className="dice-circle flex" onClick={rollAdvice}>
            <svg className="dice" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
        </div>
    </>)
}