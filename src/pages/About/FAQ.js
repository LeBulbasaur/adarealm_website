import "./aboutsite.css"
import "animate.css/animate.min.css";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Question from "./Question"
import logo from "../../assets/logo__original.png"


export default function FAQ() {
    return (
        <div>
            <Navbar />
            <div className="aboutsite__container">
                <div className="aboutsite__content">
                    <div className="aboutsite__questions__box animate__animated animate__fadeInLeft">
                        <h2>Frequently Asked Questions</h2>
                        <div className="aboutsite__questions__list">
                            <Question
                                question="What's an NFT?"
                                answer="Much like an autographed book or a rare coin, NFTs (non-fungible tokens) are unique digital items that cannot be easily exchanged for something of similar value, simply because their distinctive properties make them one-of-a-kind. Since no two NFTs are exactly alike, their value is based on the rarity of the item and the community driving it."
                                line={false}
                            />
                            <Question
                                question="When does minting begin?"
                                answer="We don't have a release date yet, but we're aiming to drop the collection by April 2022. Follow our Twitter page or join our Discord server to get the latest updates and be the first one to know."
                            />
                            <Question
                                question="Who can mint one?"
                                answer="We don't have a release date yet, but we're aiming to drop the collection by April 2022. Follow our Twitter page or join our Discord server to get the latest updates and be the first one to know."
                            />
                        </div>
                    </div>
                    <div className="aboutsite__something animate__animated animate__fadeInRight">
                        <img className="aboutsite__placeholder" src={logo} alt="adarealm logo" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}