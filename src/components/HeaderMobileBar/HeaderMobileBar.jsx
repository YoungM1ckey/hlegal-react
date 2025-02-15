import './HeaderMobileBar.scss'

function HeaderMobileBar() {
    return (
        <div className="contacts-mobile">
            <div className="change-language">
                <button className="change-language__item">УК</button>
                <button className="change-language__item">РУ</button>
                <button autoFocus className="change-language__item">EN</button>
            </div>
            <a className="contact__number" href="tel:+380800211927">0800 211 927</a>
        </div>
    )
}

export default HeaderMobileBar;