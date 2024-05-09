import * as React from "react"

import "./burger.scss"

const Burger = ({ isMenuOpen, toggleMenu }) => {

    return (
        <button
            className={`burger${isMenuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}>
            <span></span>
        </button>
    )

}

export default Burger