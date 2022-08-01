import "./islands.css"
import "animate.css";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import genesisImage from "../../assets/genesis-island.png"
import phoenixImage from "../../assets/phoenix-island.png"
import glusImage from "../../assets/glus-island.png"
import lazyImage from "../../assets/lazy-island.png"

export default function Islands() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div>
            <Navbar />
            <div className="islands__container">
                <div className="islands__content">
                    <div className="islands__header animate__animated animate__fadeInLeft">
                        <h2>Islands</h2>
                    </div>
                    <div className="islands__box__container animate__animated animate__fadeInUp">
                        <div className="island__container">
                            <div className="island__image">
                                <img src={genesisImage} alt="genesis island image" />
                            </div>
                            <h4>Genesis Island</h4>
                        </div>
                        <div className="island__container">
                            <div className="island__image">
                                <img src={phoenixImage} alt="phoenix island image" />
                            </div>
                            <h4>Phoenix Island</h4>
                        </div>
                        <div className="island__container">
                            <div className="island__image">
                                <img src={glusImage} alt="glus island image" />
                            </div>
                            <h4>Cryptodelics Island</h4>
                        </div>
                        <div className="island__container">
                            <div className="island__image">
                                <img src={lazyImage} alt="lazy island image" />
                            </div>
                            <h4>Lazy Llamas Island</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}