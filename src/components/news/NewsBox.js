import "./news.css"
import useWindowDimensions from "../../hooks/useWindowDimensions.js"
import { Link } from "react-router-dom"

export default function NewsBox({ title, date, text }) {
    const { width } = useWindowDimensions()

    function shorten(input, max) {
        return input && input.length > max ? input.slice(0, max).split(' ').slice(0, -1).join(' ') : input
    }

    const shortDescripton = width > 580 ? shorten(text, 150) + "..." : width > 430 ? shorten(text, 100) + "..." : shorten(text, 70) + "..."


    return (
        <div className="news__box">
            <h3>{title}</h3>
            <h4>{date}</h4>
            <p>{shortDescripton}</p>
            <p className="news__readmore">
                <Link to="/news">
                    Read more <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </p>
        </div >
    )
}