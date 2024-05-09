import * as React from "react"

import "./gray-layout.scss"

const GrayLayout = ({isMenuOpen, toggleMenu}) => {

      return (
        <div className={`gray-layout${isMenuOpen ? ' open' : ''}`} onClick={toggleMenu}>
        </div>
    )
}

export default GrayLayout
