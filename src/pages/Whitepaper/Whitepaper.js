import "./whitepaper.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

export default function Whitepaper() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div>
            <Navbar />
            <div className="whitepaper__container">
                placeholder whitepaper
            </div>
            <Footer />
        </div>
    )
}