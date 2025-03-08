import './Contact.scss'

function ContactBlock() {
    return (
        <div className="contact-container wrapper-contact">
            <address>
                <p className="map-address">
                    <span>Kyiv,</span>
                    <span>Mechnikova str, 14</span>
                </p>
                <div className="contact__link">
                    <a className="phone-number" href="tel:+380800211927">0800 211 927</a>
                    <a className="mail-address" href="mailto:contact@forstudy.space">contact@forstudy.space</a>
                </div>
                <a className="contact_link__facebook" href="https://facebook.com">
                    <svg className="facebook-icon-contact" id="facebook-icon-contact" width="38" height="38" viewBox="0 0 24 25"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path className="facebook-icon"
                              d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                              ></path>
                    </svg>
                    <span className="text-icon">
                        <span>Our page</span>
                        <span> on facebook</span>
                    </span>
                </a>
            </address>
            <form className="block-form" action="#">
                <h2 className="form__contact__title">We would like to help you</h2>
                <div className="inputs">
                    <input className="contact__input" type="text" name="username" placeholder="Name" required=""/>
                    <textarea className="contact__input massage-input" name="massage" placeholder="Massage " required/>
                </div>
                <h5 className="contact__user__title">How to answer you?</h5>
                <div className="inputs">
                    <input className="contact__input" type="tel" name="phone" placeholder="Phone numbre" required=""/>
                    <input className="contact__input" type="text" name="email" placeholder="Email" required=""/>
                </div>
                <button type="submit" className="button-massage">Send message</button>
            </form>
        </div>
    )
}

export default ContactBlock;