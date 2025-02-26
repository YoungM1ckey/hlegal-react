import React from "react";
import HeaderMobileBar from "../components/HeaderMobileBar/HeaderMobileBar.jsx";
import Header from "../components/header/Header.jsx";
import IntroServicePage from "../components/introServicePage/introServicePage.jsx";
import ClientsBlock from "../components/ClientsBlock/ClientsBlock.jsx";
import Footer from "../components/footer/Footer.jsx";

const ServicePage = () => {
    return (
        <>
            <div className="background-gradient">
                <div className="splash__block">
                    <HeaderMobileBar/>
                    <Header/>
                </div>
                <IntroServicePage/>
            </div>
            <div className="background-block">
                <div className="broder-splash"></div>
                <div className="broder-splash"></div>
            </div>
            <ClientsBlock/>
            <Footer/>
        </>

    );
};

export default ServicePage;