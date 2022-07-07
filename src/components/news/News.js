import "./news.css"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from "react-router-dom";
import NewsBox from "./NewsBox"
import data from "../../data/news.json"

export default function News() {
    const news = data.news

    const NewsArray = news.slice(0, 4).map((info, id) => {
        return (
            <NewsBox
                key={id}
                title={info.title}
                date={info.date}
                text={info.text}
            />
        )
    })

    return (
        <div className="news__main">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                <div className="news__header">
                    <h2>News</h2><span className="news__easter__egg"></span>
                </div>
                <div className="news__content">
                    <div className="news__container">
                        {NewsArray}
                    </div>
                    <div className="news__button__container">
                        <Link to="/news">
                            <div className="news__button">
                                Learn more
                            </div>
                        </Link>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}