import "./aboutsite.css"
import { useState } from "react"

export default function Question({ question, answer, line = true }) {
    const [displayed, setDisplayed] = useState(false)

    return (
        <div className="aboutsite__question__container">
            <hr style={!line ? { display: "none" } : { display: "block" }} />
            <h3>
                {question}
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style={!displayed ? { transform: "rotate(-90deg)" } : { transform: "rotate(180deg)" }}
                    onClick={() => setDisplayed(!displayed)}
                >
                    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#2B2426" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 16L16 24L24 32" stroke="#2B2426" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 24H16" stroke="#2B2426" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </h3>
            <p>{displayed ? answer : ""}</p>
        </div>
    )
}