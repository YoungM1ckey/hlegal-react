import './ServiceBlockHome.scss'
import '../../assets/fonts/services_card/_fonts-icon-service.scss'
import '../../assets/fonts/services_card/_variables.scss'

function ServiceBlockHome() {
    return (
    <>
        <div className="frame-title wrapper">
            <a className="service-title-link" href="#"
            >Services
                <svg className="service-title-link" width="12" height="13" viewBox="0 0 12 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="hover-icon-title-link" d="M3.5 2L8 6.5L3.5 11" stroke="#24A3FF" strokeWidth="2"/>
                </svg>
            </a>
            <h1 className="service-title">What can we do better than others?</h1>
        </div>
        <div className="service-card wrapper">
            <div className="card">
                <div className="card-icon-border">
                    <span className="card-icon icon-Ecommerce">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </span>
                </div>
                <h2 className="card-title">IT and e-commerce</h2>
                <p className="description">
                    An endless stream of contracts, tax issues, labor relations,
                    corporate papers - legal work distracts you from doing business.
                    But there is not much work to do to hire an in-house lawyer.
                </p>
            </div>
            <div className="card">
                <div className="card-icon-border">
                    <span className="card-icon icon-Support"></span>
                </div>
                <h2 className="card-title">Comprehensive daily legal support</h2>
                <p className="description">
                    In addition, over time, the work will become the same type and
                    uninteresting for a full-time lawyer. And we know very well how
                    difficult it is to find a good candidate with experience in the
                    field of information technology in Ukraine.
                </p>
            </div>
            <div className="card">
                <div className="card-icon-border">
                    <span className="card-icon icon-Coprorate"></span>
                </div>
                <h2 className="card-title">Structuring corporate relationships</h2>
                <p className="description">
                    Instead of just providing legal services, we will hire a lawyer
                    or a whole team that will fit into the daily life of your
                    company.
                </p>
            </div>
            <div className="card">
                <div className="card-icon-border">
                    <span className="card-icon icon-Trust"></span>
                </div>
                <h2 className="card-title">Building contractual relations</h2>
                <p className="description">
                    Once a week, or week after month, you have your own lawyer by
                    your side. Anyone in the company can catch it at the coffee
                    maker and just talk about current affairs instead of waiting for
                    update status.
                </p>
            </div>
            <div className="card">
                <div className="card-icon-border">
                    <span className="card-icon icon-Protection"></span>
                </div>
                <h2 className="card-title">
                    Protection of business, intellectual property
                </h2>
                <p className="description">
                    And all the other time he will work on new diverse projects, so
                    he will definitely not stop in professional development. One way
                    or another, all Axon Partners will work for you instead of a
                    corporate lawyer.
                </p>
            </div>
            <div className="card">
                <div className="card-icon-border">
                    <span className="card-icon icon-Court"></span>
                </div>
                <h2 className="card-title">Judicial representation</h2>
                <p className="description">
                    Is it a small, medium-sized company or a market leader? Local
                    business or multinational company? Do you have your own legal
                    department or not?
                </p>
            </div>
        </div>
    </>

)
}


export default ServiceBlockHome