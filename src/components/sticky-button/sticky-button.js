import React, { memo } from "react"

import Connect from "../../images/connect.svg"
import ConnectClose from "../../images/connect-close.svg"

import "./sticky-button.scss"   

const StickyButton = memo(({isModalOpen, onModalToggle, type, content}) => {

    return (
        <button 
        className="sticky-button" 
        aria-label={isModalOpen ? "Закрыть окно" : "Открыть окно"}
        onClick={() => onModalToggle(type, content)}
        tabIndex={1}>
        {
            isModalOpen
                ? <ConnectClose />
                : <Connect />
        }
    </button>
    )
});

export default StickyButton