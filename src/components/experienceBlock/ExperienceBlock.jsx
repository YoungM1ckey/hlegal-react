import './experienceBlock.scss'
import App from "../../App.jsx";

function experienceBlock() {
    return (
        <div id="experience-scroll" className="experience-block">
            <div className="experience__list">
                <a href="#" className="experience__list__title">Consistent</a>
                <a href="#" className="experience__list__title">Customer oriented</a>
                <a href="#" className="experience__list__title">Innovative</a>
                <a href="#" className="experience__list__title">Business oriented</a>
            </div>
            <div className="border__experience__block"></div>
            <div className="experience__description">
                <h4 className="experience__description__title">
                    We turn the idea of legal services
                </h4>
                <p className="experience__description__inner">
                    Consolidating many years of experience and practice, the company's lawyers accompany complex
                    projects and achieve a number of important decisions for the industry. Many of them form the
                    practice of applying the law of the sea in Ukraine.
                </p>
            </div>
        </div>
    )
}

export default experienceBlock;