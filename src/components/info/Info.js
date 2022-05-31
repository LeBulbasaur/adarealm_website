import "./info.css"
import adarealmPlots from "../../assets/adarealm__plots.png"

export default function Info() {
    return (
        <div className="info__main">
            <img src={adarealmPlots} alt="adarealm plots" />
            <div className="info__text">
                <h1>1964</h1>
                <h3>UNIQUE PLOT HOLDERS</h3>
                <div className="info__button">
                    Connect wallet
                </div>
            </div>
        </div>
    )
}