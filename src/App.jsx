// import { useState } from 'react';
import  from 'react';
import Header from './components/header/Header.jsx';
import './assets/_reset.scss';
import './assets/_helpers.scss';
import './assets/fonts/font/_stylesheet.scss';
import './components/header/Header.scss';
import arrowBottom from './assets/image/symbol/circle-arrow-bottom.svg'
import HeaderMobileBar from "./components/HeaderMobileBar/HeaderMobileBar.jsx";
import ExperienceBlock from "./components/experienceBlock/ExperienceBlock.jsx";
import Footer from './components/footer/Footer.jsx';
import PublicationBlock from "./components/PublicationBlock/PublicationBlock.jsx";
import ClientsBlock from "./components/ClientsBlock/ClientsBlock.jsx";
import TeamBlock from "./components/TeamBlock/TeamBlock.jsx";
import ServiceBlockHome from "./components/ServiceBlockHome/ServiceBlockHome.jsx";
import IntroServicePageEntry from "./components/introServicePageEntry/introServicePageEntry.jsx";
import IntroServicePage from "./components/introServicePage/introServicePage.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return(
      <>
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
                  <a className="wrapper service-title-link" href="#"
                  >Services
                      <svg className="service-title-link" width="12" height="13" viewBox="0 0 12 13" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                          <path className="hover-icon-title-link" d="M3.5 2L8 6.5L3.5 11" stroke="#24A3FF" strokeWidth="2"/>
                      </svg>
                  </a>
                  <ServiceBlockHome/>
              </div>
              <div className="background-block">
                  <div className="broder-splash"></div>
                  <div className="broder-splash"></div>
              </div>
              <TeamBlock/>
              <ClientsBlock/>
              <PublicationBlock/>
              <Footer/>
          </>
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
      </>
  )
}

export default App
