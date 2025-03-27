import './Contact.scss'
import { useEffect } from 'react';


function ContactBlock() {
    useEffect(() => {
        const formFeedBack = document.querySelector("#formFeedBack");

        function showErrorMessage(selectorName, errorMessage) {
            document.querySelector(`#error-${selectorName}`).textContent = errorMessage;
        }

        formFeedBack.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(formFeedBack);
            const name = formData.get("username");
            const message = formData.get("message");
            const email = formData.get("email");
            const phone = formData.get("phone");

            let hasError = false;

            if (!name) {
                showErrorMessage("name", "The name is required.");
                hasError = true;
            } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(name)) {
                showErrorMessage("name", "The name must contain only letters.");
            } else {
                showErrorMessage("name", "");
            }

            if (!message) {
                showErrorMessage("message", "The message is required.");
                hasError = true;
            } else if (message.length < 5) {
                showErrorMessage("message", "The message cannot contain less than 5 characters.");
            } else {
                showErrorMessage("message", "");
            }

            if (!phone) {
                showErrorMessage("phone", "Phone required!");
                hasError = true;
            } else if (!/^\+380/.test(phone)) {
                showErrorMessage("phone", "The number must start with +380!");
                hasError = true;
            } else if (phone.length !== 13) {
                showErrorMessage("phone", "Incorrect number of digits");
                hasError = true;
            } else {
                showErrorMessage("phone", "");
                hasError = false;
            }

            if (!email) {
                showErrorMessage("email", "Email required!");
                hasError = true;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showErrorMessage("email", "Email should be correct!");
                hasError = true;
            } else {
                showErrorMessage("email", "");
                hasError = false;
            }

            if (!hasError) {
                console.log('Sending date....')
            }
        })
    })
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
                    <svg className="facebook-icon-contact" id="facebook-icon-contact" width="38" height="38"
                         viewBox="0 0 24 25"
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
            <form action="#" className="block-form" id="formFeedBack">
                <h2 className="form__contact__title">We would like to help you</h2>
                <div className="inputs">
                    <input className="contact__input" id="username" name="username" placeholder="Name" type="text"/>
                    <span className="errorInput" id="error-name"></span>
                    <textarea className="contact__input" id="message" name="message" placeholder="Message"></textarea>
                    <span className="errorInput" id="error-message"></span>
                </div>
                <h5 className="contact__user__title">How to answer you?</h5>
                <div className="inputs">
                    <input className="contact__input" name="phone" placeholder="Phone numbre" type="tel"/>
                    <span className="errorInput" id="error-phone"></span>
                    <input className="contact__input" name="email" placeholder="Email" type="text"/>
                    <span className="errorInput" id="error-email"></span>
                </div>
                <button className="button-massage" id="submitFromButton" type="submit">Send message</button>
            </form>
        </div>
    )
}

export default ContactBlock;