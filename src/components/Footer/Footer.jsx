import './Footer.scss'
import '../../assets/_helpers.scss'

function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="mobile-footer">
                    <div className="address-on-map">
                        <p className="address-on-map-title">
                            Kyiv, Mechnikova str., 14/1
                        </p>
                        <a className="footer__locale-address"
                           href="https://www.google.com/maps/place/Mechnykova+St,+14%2F1,+Kyiv,+02000/data=!4m2!3m1!1s0x40d4cf07295b8e39:0x17b2112e2dc0e7a?sa=X&ved=1t:242&ictx=111">
                            On map
                        </a>
                    </div>
                    <div className="contact-link">
                        <a className="contact-link__facebook" href="https://facebook.com">
                            <svg width="38" height="38" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                    fill="currentColor"/>
                            </svg>
                        </a>
                        <a className="contact-link__tel" href="tel:+380800211927">0800 211 927</a>
                        <a className="contact-link__mail"
                           href="mailto:contact@forstudy.space">contact@forstudy.space</a>
                    </div>
                    <p className="footer__copyright">
                        © 2021 HLEGAL Law company, LLC
                    </p>
                </div>
                <div className="footer">
                    <div className="footer-head">
                        <div className="address-on-map">
                            <p className="address-on-map-title">
                                Kyiv, Mechnikova str., 14/1
                            </p>
                            <a className="footer__locale-address"
                               href="https://www.google.com/maps/place/Mechnykova+St,+14%2F1,+Kyiv,+02000/data=!4m2!3m1!1s0x40d4cf07295b8e39:0x17b2112e2dc0e7a?sa=X&ved=1t:242&ictx=111">
                                On map
                            </a>
                        </div>
                        <p className="footer__copyright">
                            © 2021 HLEGAL Law company, LLC
                        </p>
                    </div>
                    <div className="contact-link">
                        <a className="contact-link__facebook" href="https://facebook.com">
                            <svg className="facebook-icon" id="facebook-icon" width="38" height="38" viewBox="0 0 24 25"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="facebook-icon"
                                      d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                      fill="currentColor"/>
                            </svg>
                        </a>
                        <a className="contact-link__tel" href="tel:+380800211927">0800 211 927</a>
                        <a className="contact-link__mail"
                           href="mailto:contact@forstudy.space">contact@forstudy.space</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer