import { useEffect, useState, useRef } from "react";
import Top from "./Top";
import listAdvices from "./assets/advices.json";
import dices from "./assets/icon-dice.svg";
const Card = () => {
    const [data, setData] = useState("");
    const [numberAdvice, setNumberAdvice] = useState("");
    const notInitialRender = useRef(false);
    const [addClass, setAddClass] = useState(false);
    const adviceTextRef = useRef(null);
    const adviceNumberRef = useRef(null);
    const diceRef = useRef(null);
    useEffect(() => {
        if (notInitialRender.current) {
            const value = data;
            adviceTextRef.current.innerHTML = `"${value}"`;
            diceRef.current.classList.add("rotate");
        }
        else {
            notInitialRender.current = true;
        }
    }, [data, numberAdvice]);
    useEffect(() => {
        if (addClass) {
            diceRef.current.classList.add("rotate");
        } else {
            diceRef.current.classList.remove("rotate");
        }
    }, [addClass]);
    const rollAdvice = () => {
        const newNumberAdvice = Math.ceil(Math.random() * 77);
        const response = listAdvices[newNumberAdvice];
        setNumberAdvice(newNumberAdvice);
        setData(response);
        adviceNumberRef.current.innerHTML = `ADVICE #${newNumberAdvice}`;
        setAddClass(true);
        setTimeout(() => {
            setAddClass(false);
        }, 300);
    };
    return (<>
        <Top adviceTextRef={adviceTextRef} adviceNumberRef={adviceNumberRef} />
        <svg className="divider" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        <div className="dice-circle flex" onClick={rollAdvice}>
            <img src={dices} className="dice" ref={diceRef} alt="" />
        </div>
    </>)
}

export default Card;