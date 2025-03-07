import React from 'react';
import HeaderMobileBar from "../components/HeaderMobileBar/HeaderMobileBar.jsx";
import Header from "../components/header/Header.jsx";
import IntroServicePageEntry from "../components/introServicePageEntry/introServicePageEntry.jsx";
import PublicationBlock from "../components/PublicationBlock/PublicationBlock.jsx";
import Footer from "../components/footer/Footer.jsx";

const ServicePage = () => {
    return (
        <>
            <div className="background-gradient">
                    <HeaderMobileBar/>
                    <Header/>
                <IntroServicePageEntry/>
            </div>
            <PublicationBlock/>
            <Footer/>
        </>
    );
};

export default ServicePage;