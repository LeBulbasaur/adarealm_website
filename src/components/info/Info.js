import "./info.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import adarealmPlots from "../../assets/adarealm__plots.png"

export default function Info() {
    return (
        <div className="info__main">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
                <img src={adarealmPlots} alt="adarealm plots" />
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
                <div className="info__text">
                    <h1>1964</h1>
                    <h3>UNIQUE PLOT HOLDERS</h3>
                    <div className="info__button">
                        Connect wallet
                    </div>
                </div>
            </AnimationOnScroll>
        </div >
    )
}