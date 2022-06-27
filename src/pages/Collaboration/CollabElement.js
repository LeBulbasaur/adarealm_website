import "./collaboration.css"
import placeholderImage from "../../assets/logo.png"

export default function CollabElement({ photo = placeholderImage, name, description, link = "/" }) {
    return (
        <div className="collaboration__box">
            <div className="collaboration__img__box">
                <img src={photo} alt="collab logo" />
            </div>
            <h4>{name}</h4>
            <p>{description}</p>
            <a href={link}>
                <div className="gray__button__collab">
                    Visit their website
                </div>
            </a>
        </div>
    )
}