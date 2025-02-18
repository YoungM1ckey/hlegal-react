import './ClientsBlock.scss'

import clientslogo1 from './clients/Hillel-Logo.svg'
import clientslogo2 from './clients/wannabiz.svg'
import clientslogo3 from './clients/tapgerine.svg'
import clientslogo4 from './clients/3dlook.svg'
import clientslogo5 from './clients/arangear.svg'
import clientslogo6 from './clients/adtelligent.svg'
import clientslogo7 from './clients/clickky.svg'
import clientslogo8 from './clients/ecolease.svg'
import clientslogo9 from './clients/infratek.svg'
import clientslogo10 from './clients/sity-park-logo.svg'
import clientslogo11 from './clients/art-print-studio.svg'
import clientslogo12 from './clients/ultimate-card.svg'


function ClientsBlock() {
    return (
        <section className="clients">
            <div className="clients-title-center">
                <h3 className="clients-title">They already trust us</h3>
            </div>
            <div className="clients-cards">
                <div className="clients-card">
                    <img src={clientslogo1} alt="Hillel-Logo"/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo2} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo3} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo4} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo5} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo6} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo7} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo8} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo9} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo10} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo11} alt=""/>
                </div>
                <div className="clients-card">
                    <img src={clientslogo12} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default ClientsBlock