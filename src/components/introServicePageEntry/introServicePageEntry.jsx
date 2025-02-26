import './introServicePageEntry.scss'

function IntroServicePageEntry() {
    return (
        <>
            <div className="wrapper intro__block">
                <div className="card-icon-border">
                    <span className="card-icon icon-Ecommerce">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </span>
                </div>
                {/*<div className="intro__title">IT and e-commerce</div>*/}
                <h2 className="intro__title">IT and e-commerce</h2>
                <p className="intro__description">
                    <span>An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer. </span>
                    <span>In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.</span>
                </p>
                <button type="button" className="intro__consultation">
                    Free consultation
                </button>
                <div className="intro__description__block">
                    <h2 className="intro__description__title">Services in this area:</h2>
                    <div className="intro__list__description">
                        <ul className="description__intro__list">
                            <li className="item__description__intro">support of investment projects for the development of port infrastructure;</li>
                            <li className="item__description__intro">certification of GTS, entering information about them in mandatory databases and registers;</li>
                            <li className="item__description__intro">registration of permits for the construction of port terminals;</li>
                            <li className="item__description__intro">registration of permit and other mandatory documentation required for carrying out activities in the port (emission permit, conclusion on EIA, RTC, etc.);</li>
                        </ul>
                        <ul className="description__intro__list">
                            <li className="item__description__intro">support of procedures related to the lease of state property in the port;</li>
                            <li className="item__description__intro">support of procedures related to confirmation of the status of port operator, maritime agent, foreign sailing line;</li>
                            <li className="item__description__intro">support of procedures related to the inclusion of the company within the port;</li>
                            <li className="item__description__intro">appeals against actions related to the illegal imposition of services in the port by monopoly companies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroServicePageEntry;