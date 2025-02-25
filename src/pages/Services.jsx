import React from 'react';
import HeaderMobileBar from "../components/HeaderMobileBar/HeaderMobileBar.jsx";
import Header from "../components/header/Header.jsx";
import IntroServicePageEntry from "../components/introServicePageEntry/introServicePageEntry.jsx";
import PublicationBlock from "../components/PublicationBlock/PublicationBlock.jsx";
import Footer from "../components/footer/Footer.jsx";

const Services = () => {
    return (
        <>
            <div className="background-gradient">
                <div className="splash__block">
                    <HeaderMobileBar/>
                    <Header/>
                </div>
                <IntroServicePageEntry/>
            </div>
            <div className="background-block">
                <div className="broder-splash"></div>
                <div className="broder-splash"></div>
            </div>
            <PublicationBlock/>
            <Footer/>
        </>
    );
};

export default Services;