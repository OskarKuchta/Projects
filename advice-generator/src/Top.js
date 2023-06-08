import { useRef, useEffect } from "react"

const Top = ({ adviceTextRef, adviceNumberRef }) => {
    useEffect(() => {
        if (adviceNumberRef) {
            adviceNumberRef.current = adviceNumber.current;
        }
        if (adviceTextRef) {
            adviceTextRef.current = adviceText.current;
        }
    }, [adviceNumberRef, adviceTextRef]);
    const adviceNumber = useRef(null);
    const adviceText = useRef(null);
    return (
        <>
            <h1 className="advice-number" ref={adviceNumber}>ADVICE #1</h1>
            <p className="advice-text" ref={adviceText}>"Don't compare yourself to others, focus on being the best version of yourself."</p>
        </>
    )
}



export default Top