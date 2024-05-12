import React from "react";

import IconClose from "../../images/icon-close.svg";

import "./close-button.scss";

const CloseButton = ({ onClose = () => {} }) => {
    return (
        <button
            className="close-button"
            aria-label="Закрыть окно"
            onClick={onClose}
        >
            <IconClose />
        </button>
    )
}

export default CloseButton;