import './navbar.css';
import "../../styles/buttons.css"
import logo from '../../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar__main">
            <div className="logo__container">
                <img src={logo} alt="logo" />
                <p>ADAREALM</p>
            </div>
            <ul className="navbar__list">
                <li>
                    <a href="#">Roadmap</a>
                </li>
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">Whitepaper</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Collaboration</a>
                </li>
                <li>
                    <a href="#">Charity</a>
                </li>
                <li>
                    <div className="blue__button">
                        Connect Wallet
                    </div>
                </li>
            </ul>
        </nav>
    );
}