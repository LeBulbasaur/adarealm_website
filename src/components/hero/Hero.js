import "./hero.css"
import logo from "../../assets/logo__original.png"

export default function Hero() {
    return (
        <div className="hero__main">
            <div className="hero__content">
                <h1 className="hero__title">Ada Realm x Lazy Llamas Map is Live!</h1>
                <a href="#">Click here</a>
            </div>
            <img className="hero__logo" src={logo} alt="logo" />
        </div>
    )
}