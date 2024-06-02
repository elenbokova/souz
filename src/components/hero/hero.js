import * as React from "react"
import ArrowButton from "../arrow-button/arrow-button"
import { StaticImage } from "gatsby-plugin-image"
import "./hero.scss"

const Hero = ({ children }) => {

    // const minHeightValue = "calc(100vh - 80px)";

    const styleObject = {
        width: '100%',
        minHeight: '100%'
    };

    return (
        <section id="hero" className="hero">

            <div className="hero__image-wrapper">
                    <StaticImage
                        src="../../images/hero.jpg"
                        alt="Защита от взлома"
                        style={styleObject}
                    />
            </div>

            <div className="hero__content">
                <div className="container">
                <h1 className="hero__title">
                    Охрана бизнеса, коттеджа и квартиры
                    <span> "под&nbsp;ключ"</span> <br />
                    от 660 руб/мес
                </h1>
                <p className="hero__text">Ваша безопасность - наша забота</p>
                {children}
            </div>
            <ArrowButton to={"about"} />
            </div>
        </section>

    )
}

export default Hero