import React from "react";
import HeaderMobileBar from "../components/HeaderMobileBar/HeaderMobileBar.jsx";
import Header from "../components/header/Header.jsx";
import IntroServicePage from "../components/introServicePage/introServicePage.jsx";
import ClientsBlock from "../components/ClientsBlock/ClientsBlock.jsx";
import Footer from "../components/footer/Footer.jsx";

const Services = () => {
    return (
        <>
            <div className="background-gradient">
                    <HeaderMobileBar/>
                    <Header/>
                <IntroServicePage/>
            </div>
            <ClientsBlock/>
            <Footer/>
        </>

    );
};

export default Services;