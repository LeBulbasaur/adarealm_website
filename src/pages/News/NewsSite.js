import "./newssite.css"
import "animate.css/animate.min.css";
import NewsSiteBox from "./NewsSiteBox"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import data from "../../data/news.json"

export default function NewsSite() {
    const news = data.news

    const NewsArray = news.map((info, id) => {
        return (
            <NewsSiteBox
                key={id}
                title={info.title}
                date={info.date}
                text={info.text}
            />
        )
    })

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div>
            <Navbar />
            <div className="newssite__container">
                <div className="newssite__content">
                    <div className="newssite__header animate__animated animate__fadeInDown">
                        <h2>News</h2>
                        <p>Find out all the newest updates in our posts: </p>
                    </div>
                    <div className="newssite__news__container animate__animated animate__fadeInUp">
                        {NewsArray}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}