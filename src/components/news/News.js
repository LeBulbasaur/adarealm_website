import "./news.css"
import NewsBox from "./NewsBox"

export default function News() {
    return (
        <div className="news__main">
            <div className="news__header">
                <h2>News</h2><span className="news__easter__egg"></span>
            </div>
            <div className="news__content">
                <div className="news__container">
                    <NewsBox
                        title="News #1"
                        date="2022.10.05"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, urna eu tincidunt consectetur, nisi nunc euismod nisi, 
                        eu tincidunt nisi nunc euismod nisi. Sed euismod, urna eu tincidunt 
                        consectetur, nisi nunc euismod nisi, eu tincidunt nisi nunc euismod nisi."
                    />
                    <NewsBox
                        title="News #1"
                        date="2022.10.05"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, urna eu tincidunt consectetur, nisi nunc euismod nisi, 
                        eu tincidunt nisi nunc euismod nisi. Sed euismod, urna eu tincidunt 
                        consectetur, nisi nunc euismod nisi, eu tincidunt nisi nunc euismod nisi."
                    />
                    <NewsBox
                        title="News #1"
                        date="2022.10.05"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, urna eu tincidunt consectetur, nisi nunc euismod nisi, 
                        eu tincidunt nisi nunc euismod nisi. Sed euismod, urna eu tincidunt 
                        consectetur, nisi nunc euismod nisi, eu tincidunt nisi nunc euismod nisi."
                    />
                    <NewsBox
                        title="News #1"
                        date="2022.10.05"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed euismod, urna eu tincidunt consectetur, nisi nunc euismod nisi, 
                        eu tincidunt nisi nunc euismod nisi. Sed euismod, urna eu tincidunt 
                        consectetur, nisi nunc euismod nisi, eu tincidunt nisi nunc euismod nisi."
                    />
                </div>
                <div className="news__button__container">
                    <div className="news__button">
                        Learn more
                    </div>
                </div>
            </div>
        </div>
    )
}