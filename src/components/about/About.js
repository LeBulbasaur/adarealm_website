import "./about.css"
import { AnimationOnScroll } from "react-animation-on-scroll"
import adarealmToken from "../../assets/adarealm__token.png"

export default function About() {
    return (
        <div className="about__main">
            <div className="about__container">
                <AnimationOnScroll animateOnce={true} animateIn="animate__slideInLeft">
                    <h2>About the project</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod, nisl eget consectetur sagittis, nisl
                        nunc egestas nisi, eu aliquam eros nisl eu nunc. Nulla
                        facilisi. Donec euismod, nisl eget consectetur sagittis,
                        nisl nunc egestas nisi, eu aliquam eros nisl eu nunc.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod, nisl eget consectetur sagittis, nisl
                        nunc egestas nisi, eu aliquam eros nisl eu nunc. Nulla
                        facilisi. Donec euismod, nisl eget consectetur sagittis.
                    </p>
                    <div className="button__div">
                        <div className="learn__button">
                            Learn more
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__slideInRight">
                <img src={adarealmToken} alt="adarealm token" />
            </AnimationOnScroll>
        </div>
    )
}