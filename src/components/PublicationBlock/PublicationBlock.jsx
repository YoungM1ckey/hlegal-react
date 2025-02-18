import "./PublicationBlock.scss"
import publication1 from "../../assets/image/publication/publication-1.png"
import publication2 from "../../assets/image/publication/publication-2.png"
import publication3 from "../../assets/image/publication/publication-3.png"

function PublicationBlock() {
    return (
        <section className="publication">
            <div className="wrapper">
                <div className="server-title-block">
                    <a className="service-title-link" href="#"
                    >Publications
                        <svg
                            className="service-title-icon"
                            fill="none"
                            height="13"
                            viewBox="0 0 12 13"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="hover-icon-title-link"
                                d="M3.5 2L8 6.5L3.5 11"
                                stroke="#24A3FF"
                                strokeWidth="2"></path>
                        </svg>
                    </a>
                    <h2 className="publication__title">
                        We have something to tell
                    </h2>
                </div>
                <div className="publication__cards">
                    <div className="publication__card">
                        <img className="publication__card__image" src={publication1}
                             alt="image"/>
                        <div className="publication__card__information">
                            <a className="publication__card__information__link" href="#">
                                <h3 className="publication__card__information__title">
                                    Equity associate
                                </h3>
                            </a>
                            <time className="publication__card__information__date" dateTime="04-23">April 22</time>
                            <p className="publication__card__description">
                                I'm a jun on projects. I am a co-owner of a law firm. How it happened. Before entering
                                my
                                parents
                                told
                                me that if I…
                            </p>
                        </div>
                    </div>
                    <div className="publication__card">
                        <img className="publication__card__image" src={publication2}
                             alt="image"/>
                        <div className="publication__card__information">
                            <a className="publication__card__information__link" href="#">
                                <h3 className="publication__card__information__title">
                                    Penalty for the Good Corporation: what will happen to Google and others for
                                    violating the
                                    GDPR
                                </h3>
                            </a>
                            <time className="publication__card__information__date" dateTime="09-29">September 29</time>
                            <p className="publication__card__description">
                                And why the recovery of 50 million euros could be a fateful precedent According to
                                Mind.ua
                                January 21 National Commission for Data Protection.
                            </p>
                        </div>
                    </div>
                    <div className="publication__card">
                        <img className="publication__card__image" src={publication3}
                             alt="image"/>
                        <div className="publication__card__information">
                            <a className="publication__card__information__link" href="#">
                                <h3 className="publication__card__information__title">
                                    Millennial Testament
                                </h3>
                            </a>
                            <time className="publication__card__information__date" dateTime="08-19">August 19</time>
                            <p className="publication__card__description">
                                What and how modern vloggers, opinion leaders and crypto-millionaires will inherit A
                                typical
                                legacy of the Ukrainian generation X looks like this: an apartment in…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PublicationBlock