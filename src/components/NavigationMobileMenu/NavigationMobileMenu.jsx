import './NavigationMobileMenu.scss';


function NavigationMobileMenu() {
    return (
        <nav id="navigation__mobile" className="navigation__menu-mobile">
            <div className="nav-elements">
                <div className="btn-close-nav">
                    <button id="close__button-nav-mobile" className="close__menu__nav__mobl">
                        <svg className="icon__close__nav" width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7L25 25" stroke="#EC6F5D" strokeWidth="2"/>
                            <path d="M25 7L7 25" stroke="#EC6F5D" strokeWidth="2"/>
                        </svg>

                    </button>
                </div>
                <div className="nav-block-element">
                    <a className="navigation__menu-mobile__item" href="#">about us</a>
                    <a className="navigation__menu-mobile__item" href="#">послуги</a>
                    <a className="navigation__menu-mobile__item" href="#">команда</a>
                    <a className="navigation__menu-mobile__item" href="#">публікації</a>
                    <a className="navigation__menu-mobile__item" href="#">контакти</a>
                </div>
            </div>
        </nav>
    )
}

export default NavigationMobileMenu;