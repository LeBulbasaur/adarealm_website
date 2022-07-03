import './navbar.css';
import "../../styles/buttons.css"
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="navbar__main">
                <div className="logo__container">
                    <img src={logo} alt="logo" />
                    <Link to="/">
                        <p>ADAREALM</p>
                    </Link>
                </div>
                <ul className="navbar__list">
                    <li>
                        <Link to="/about">
                            <span className='navbar__hyperlink'>About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collaboration">
                            <span className='navbar__hyperlink'>Collaboration</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/questions">
                            <span className='navbar__hyperlink'>FAQ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">
                            <span className='navbar__hyperlink'>Explore</span>
                        </Link>
                    </li>
                    <li>
                        <div className="blue__button">
                            Connect Wallet
                        </div>
                    </li>
                </ul>
                {!isOpen ? (
                    <svg className="navbar__burger" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsOpen(!isOpen)}>
                        <path d="M4 16H28" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 8H28" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 24H28" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg className="navbar__burger" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsOpen(!isOpen)}>
                        <path d="M25.3332 6.66669L6.6665 25.3334" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.6665 6.66669L25.3332 25.3334" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}

            </nav>
            <div className={`navbar__dropdown--open ${!isOpen ? 'navbar__animate' : ""}`}>
                <ul className="navbar__list__dropdown">
                    <li>
                        <Link to="/about">
                            <span className='navbar__hyperlink'>About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collaboration">
                            <span className='navbar__hyperlink'>Collaboration</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/questions">
                            <span className='navbar__hyperlink'>FAQ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">
                            <span className='navbar__hyperlink'>Explore</span>
                        </Link>
                    </li>
                    <li>
                        <div className="blue__button__dropdown">
                            Connect Wallet
                        </div>
                    </li>
                    <li>
                        <div className="social__logos">
                            <a href="https://discord.gg/VsMxxmTU" target="_blank">
                                <svg width="60" height="60" viewBox="0 0 57 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48.0602 3.48157C44.4909 1.8701 40.6634 0.682845 36.6616 0.00285248C36.5887 -0.0102712 36.5159 0.0225255 36.4783 0.0881204C35.9861 0.949586 35.4409 2.07344 35.059 2.95678C30.7548 2.32272 26.4726 2.32272 22.2566 2.95678C21.8747 2.0538 21.3096 0.949586 20.8152 0.0881204C20.7776 0.0247141 20.7048 -0.00808259 20.6319 0.00285248C16.6323 0.680672 12.8048 1.86793 9.23332 3.48157C9.20241 3.49469 9.1759 3.51657 9.15832 3.54498C1.89839 14.2173 -0.0904087 24.6272 0.885229 34.9081C0.889643 34.9584 0.918338 35.0065 0.958071 35.0371C5.74796 38.4983 10.3878 40.5996 14.9415 41.9923C15.0143 42.0142 15.0916 41.988 15.1379 41.9289C16.2151 40.4815 17.1753 38.9554 17.9986 37.3504C18.0472 37.2564 18.0008 37.1449 17.9015 37.1077C16.3785 36.5392 14.9282 35.8461 13.5332 35.059C13.4228 34.9956 13.414 34.8403 13.5155 34.766C13.8091 34.5495 14.1027 34.3243 14.383 34.0969C14.4338 34.0554 14.5044 34.0466 14.5641 34.0728C23.7288 38.1901 33.6507 38.1901 42.7074 34.0728C42.767 34.0444 42.8377 34.0532 42.8906 34.0947C43.171 34.3221 43.4645 34.5495 43.7603 34.766C43.8618 34.8403 43.8552 34.9956 43.7449 35.059C42.3498 35.8614 40.8996 36.5392 39.3743 37.1056C39.275 37.1427 39.2309 37.2564 39.2795 37.3504C40.1204 38.9531 41.0806 40.4793 42.1379 41.9268C42.1821 41.988 42.2615 42.0142 42.3344 41.9923C46.9101 40.5996 51.5499 38.4983 56.3398 35.0371C56.3818 35.0065 56.4083 34.9606 56.4127 34.9103C57.5803 23.0245 54.457 12.6999 48.133 3.54715C48.1175 3.51657 48.0911 3.49469 48.0602 3.48157ZM19.3672 28.6481C16.608 28.6481 14.3345 26.1556 14.3345 23.0945C14.3345 20.0333 16.5639 17.5408 19.3672 17.5408C22.1925 17.5408 24.444 20.0552 24.3999 23.0945C24.3999 26.1556 22.1704 28.6481 19.3672 28.6481ZM37.9749 28.6481C35.2157 28.6481 32.9422 26.1556 32.9422 23.0945C32.9422 20.0333 35.1716 17.5408 37.9749 17.5408C40.8003 17.5408 43.0517 20.0552 43.0076 23.0945C43.0076 26.1556 40.8003 28.6481 37.9749 28.6481Z" fill="#F0F0F0" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/AdaRealm" target="_blank">
                                <svg width="60" height="60" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.054 10.4558C47.0855 10.9115 47.0855 11.3671 47.0855 11.827C47.0855 25.8394 36.4174 42 16.9102 42V41.9916C11.1477 42 5.50488 40.3495 0.653809 37.2375C1.49172 37.3383 2.33383 37.3887 3.17805 37.3908C7.95352 37.395 12.5925 35.7928 16.3495 32.8425C11.8113 32.7564 7.83172 29.7977 6.4415 25.4782C8.03122 25.7848 9.66925 25.7218 11.2296 25.2956C6.2819 24.296 2.72234 19.9493 2.72234 14.9012C2.72234 14.855 2.72234 14.8109 2.72234 14.7668C4.19656 15.5879 5.84719 16.0435 7.53562 16.0939C2.87564 12.9798 1.43922 6.78102 4.25326 1.93453C9.63775 8.55961 17.5822 12.5872 26.1104 13.0134C25.2557 9.33026 26.4233 5.47071 29.1786 2.88157C33.45 -1.13338 40.168 -0.92759 44.1833 3.34144C46.5584 2.87317 48.8349 2.00172 50.9181 0.767003C50.1264 3.22175 48.4695 5.30692 46.256 6.63193C48.3582 6.38415 50.412 5.82138 52.3461 4.96254C50.9223 7.096 49.1289 8.95439 47.054 10.4558Z" fill="#F0F0F0" />
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}