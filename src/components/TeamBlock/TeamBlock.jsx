import './TeamBlock.scss'

import TeamImage from '../../assets/image/team-photos/team-1.png'

function TeamBlock() {
    return (
        <section className="team">
            <div className="wrapper">
                <div className="frame-team-title">
                    <img
                        className="image-team-title"
                        src={TeamImage}
                        alt="member-team"
                    />
                    <div className="content-team-block">
                        <a className="service-title-link" href="#"
                        >Команда
                            <svg
                                className="service-title-link-icon"
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
                        <h2 className="team-title">
                            Ми звикли брати на себе відповідальність та завжди гарантуємо
                            чесну, вчасну допомогу, навіть у ситуаціях, коли більшість
                            безсилі.
                        </h2>
                        <div className="block-member-team">
                            <h4 className="name-member-team">Олександр Олександровський</h4>
                            <p className="about-member-team">Керуючий партнер</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TeamBlock;