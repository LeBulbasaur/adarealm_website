import "./hero.css";
import logo from "../../assets/logo_big.png";

export default function Hero() {
  return (
    <div className="hero__main">
      <div className="hero__content">
        <h1 className="hero__title">Ada Realm x Lazy Llamas Map is Live!</h1>
        {/* <a href="#">Click here</a> */}
        <button className="learn__button">Visit map!</button>
      </div>
      <img className="hero__logo" src={logo} alt="logo" />
    </div>
  );
}
