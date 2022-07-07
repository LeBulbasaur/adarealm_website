import "./error.css"
import { Link } from "react-router-dom"

export default function Error() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className="error__container">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Link to="/">
                <h4 className="error__return">
                    return to homepage
                </h4>
            </Link>
        </div>
    )
}