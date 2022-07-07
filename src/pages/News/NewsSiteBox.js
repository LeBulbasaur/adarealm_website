import "./newssite.css"
import "animate.css/animate.min.css";
import 'react-slidedown/lib/slidedown.css'
import useWindowDimensions from "../../hooks/useWindowDimensions.js"
import { useState } from "react"
import { SlideDown } from 'react-slidedown'

export default function NewsSiteBox({ title, date, text }) {
    const { width } = useWindowDimensions()
    const [isShown, setShown] = useState(false)

    function shorten(input, max) {
        return input && input.length > max ? input.slice(0, max).split(' ').slice(0, -1).join(' ') : input
    }

    const shortenText = width > 1250 ? shorten(text, 220) : shorten(text, 100)

    return (
        <div className="newssite__newsbox">
            <h3>{title}</h3>
            <h4>{date}</h4>
            <SlideDown>
                <p>{!isShown ? shortenText + "..." : text}</p>
            </SlideDown>
            <div className="newsbox__readmore__container">
                <p className="newsbox__readmore" onClick={() => setShown(!isShown)}>
                    {!isShown ? "Read more" : "Read less"}
                    &nbsp;&nbsp;
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </p>
            </div>
        </div>
    )
}