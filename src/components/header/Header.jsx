import './Header.scss';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationHeaderBar from '../navigationHeaderBar/NavigationHeaderBar.jsx'
import logoWhite from './logoHeaderWhite.svg';
import logoBlack from './logoHeaderBlack.png';
import hamburgerButtonIcon from './hamburger-button.svg';
import slashIcon from '../../assets/image/symbol/slash.svg';
import { useMediaQuery } from "react-responsive";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.removeProperty("overflow-y");
        }
    };

    const location = useLocation();
    const whiteLogoPages = ["/", "/Services", "/servicepage"];
    const isWhiteLogo = whiteLogoPages.includes(location.pathname);
    const logoSrc = isWhiteLogo ? logoWhite : logoBlack;

    const navStyle = { color: isWhiteLogo ? "white" : "#24A3FF" };

    return (


    <header className="header">
            <div className="navigation-desktop">
                <NavigationHeaderBar/>
                <nav className="nav__links">
                    <a style={navStyle} className="nav__link" href="#">about us</a>
                    <a style={navStyle} className="nav__link" href="/Services">services</a>
                    <a style={navStyle} className="nav__link" href="#">team</a>
                    <a style={navStyle} className="nav__link" href="#">publications</a>
                    <a style={navStyle} className="nav__link" href="/contact">contact</a>
                </nav>
            </div>
        {isTablet && <NavigationHeaderBar />}
            <a href="/" className="logo">
                <img id="logo-icon"
                     className="header__logo"
                     src={logoSrc}
                     alt="hLegal"
                />
                <img className="slash-mobile" src={slashIcon} alt="slash"></img>
                <p className="header__name-page">
                    services
                </p>
            </a>
            <nav className="nav__links tablet" style={navStyle}>
                <a style={navStyle} className="nav__link" href="#">about us</a>
                <a style={navStyle} className="nav__link" href="/Services">services</a>
                <a style={navStyle} className="nav__link" href="#">team</a>
                <a style={navStyle} className="nav__link" href="#">publications</a>
                <a style={navStyle} className="nav__link" href="/contact">contact</a>
            </nav>
            <button
                id="hamburger__button"
                className={`navigation-mobile ${isMenuOpen ? "active-nav-mobile" : ""}`}
                onClick={toggleMenu}
            >
                <img src={hamburgerButtonIcon} alt="Navigation" />
            </button>

        {isMenuOpen && (
            <nav id="navigation__mobile" className="mobile-menu">
                <button className="close__button-nav-mobile" onClick={toggleMenu}>
                    <svg className="icon__close__nav" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7L25 25" stroke="#EC6F5D" strokeWidth="2"/>
                        <path d="M25 7L7 25" stroke="#EC6F5D" strokeWidth="2"/>
                    </svg>
                </button>
                <div className="nav-block-element">
                    <a className="navigation__menu-mobile__item" href="#">about us</a>
                    <a className="navigation__menu-mobile__item" href="/Services">services</a>
                    <a className="navigation__menu-mobile__item" href="#">team</a>
                    <a className="navigation__menu-mobile__item" href="#">publications</a>
                    <a className="navigation__menu-mobile__item" href="/contact">contact</a>
                </div>
            </nav>
        )}
    </header>
    )
}

export default Header