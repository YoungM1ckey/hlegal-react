import React from 'react';
import HeaderMobileBar from "../components/HeaderMobileBar/HeaderMobileBar.jsx";
import Header from "../components/header/Header.jsx";
import arrowBottom from "../assets/image/symbol/circle-arrow-bottom.svg";
import ExperienceBlock from "../components/experienceBlock/ExperienceBlock.jsx";
import ServiceBlockHome from "../components/ServiceBlockHome/ServiceBlockHome.jsx";
import TeamBlock from "../components/TeamBlock/TeamBlock.jsx";
import ClientsBlock from "../components/ClientsBlock/ClientsBlock.jsx";
import PublicationBlock from "../components/PublicationBlock/PublicationBlock.jsx";
import Footer from "../components/footer/Footer.jsx";

const Home = () => {
    return (
        <>
            <div className="background-gradient">
                <div className="splash__block">
                    <HeaderMobileBar/>
                    <Header/>
                    <h1 className="splash__title wrapper">
                        you legal solutions provider
                    </h1>
                    <div className="arrow-link__block">
                        <a className="arrow-link" href="#experience-scroll">
                            <img src={arrowBottom} alt=""/>
                        </a>
                    </div>
                </div>
                <ExperienceBlock/>
                <a className="wrapper service-title-link" href="/servicePage"
                >Services
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path className="hover-icon-title-link" d="M3.5 2L8 6.5L3.5 11" stroke="#24A3FF" strokeWidth="2"/>
                    </svg>
                </a>
                <ServiceBlockHome/>
            </div>
            <TeamBlock/>
            <ClientsBlock/>
            <PublicationBlock/>
            <Footer/>
        </>
    );
};

export default Home;