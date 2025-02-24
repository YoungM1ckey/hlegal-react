// import { useState } from 'react';
import Header from './components/header/Header.jsx';
import './assets/_reset.scss';
import './assets/_helpers.scss';
import './assets/fonts/font/_stylesheet.scss';
import './components/header/Header.scss';
import arrowBottom from './assets/image/symbol/circle-arrow-bottom.svg'
import HeaderMobileBar from "./components/HeaderMobileBar/HeaderMobileBar.jsx";
import ExperienceBlock from "./components/experienceBlock/ExperienceBlock.jsx";
import Footer from './components/Footer/Footer.jsx';
import PublicationBlock from "./components/PublicationBlock/PublicationBlock.jsx";
import ClientsBlock from "./components/ClientsBlock/ClientsBlock.jsx";
import TeamBlock from "./components/TeamBlock/TeamBlock.jsx";
import ServiceBlockHome from "./components/ServiceBlockHome/ServiceBlockHome.jsx";

function App() {
  // const [count, setCount] = useState(0)

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
  )
}

export default App
