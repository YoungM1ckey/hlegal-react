import React from 'react';
import HeaderMobileBar from "../components/HeaderMobileBar/HeaderMobileBar.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ContactBlock from "../components/Contact/Contact.jsx";
// import Contact from "../components/Contact.jsx";

const ContactPage = () => {
    return (
        <>
            <HeaderMobileBar />
            <Header />
            <ContactBlock />
            <Footer />
        </>
    );
};

export default ContactPage;