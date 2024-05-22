import * as React from "react"

import "./special.scss"

const Special = ({ theme = "", id, children }) => {
    return (

        <div className={`special ${theme}`} id={id}>
            <div className="container">
                <h3 className="title-3 title-3__dark">Срочное подключение на охрану за 24 часа!</h3>
                <p>
                    В условиях повышенной криминогенной обстановки — предлагаем срочный монтаж оборудования и постановку квартиры, дома на охрану за 3 часа.
                </p>
                <div className="special__button">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Special