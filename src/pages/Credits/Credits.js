import "./credits.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ground from "../../assets/ground.png"
import mountain from "../../assets/mountain.png"
import lava from "../../assets/lava.png"


export default function Credits() {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div>
            <Navbar />
            <div className="credits__container">
                <div className="credits__content">
                    <div className="credits__header">
                        <h2>Credits</h2>
                    </div>
                    <ul>
                        <li>
                            <h4>Forest Walk by Alexander Nakarada</h4>
                        </li>
                        <li>
                            <h4>Music promoted by <a href="https://www.chosic.com/free-music/all/" target="blank">https://www.chosic.com/free-music/all/</a></h4>
                        </li>
                        <li>
                            <h4>Attribution 4.0 International (CC BY 4.0)</h4>
                        </li>
                    </ul>
                    <div className="credits__lands">
                        <img src={ground} alt="adarealm ground" />
                        <img src={lava} alt="adarealm lava" />
                        <img src={mountain} alt="adarealm mountain" />
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}