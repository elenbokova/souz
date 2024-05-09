import React from "react"

import PhoneForm from "../phone-form/phone-form"
import Phone from "../phone"

import IconClose from "../../images/icon-close.svg";

import "./modal.scss"

const ModalGeneral = ({ isModalOpen, type, content, isOverlayActive, onClose }) => {
    //const ESCAPE_KEY = 27;

    let title = "";
    let text = "";
    let modalPosition = "";

    switch (type) {
        case "special":
            title = "Рассчитать стоимость";
            break;
        case "consult":
            title = "Проконсультироваться";
            text = "Оставьте свои данные и мы свяжемся с Вами в течении дня";
            break;
        case "question":
            title = "Ответим на любой вопрос в течении 1 часа";
            modalPosition = "modal--right-corner"
            break;
        default:
            title = "Наш телефон";
            break;
    }

    const renderContent = (content) => {
        switch (content) {
            case "phoneForm":
                return (
                    <PhoneForm isModal={true} />
                )
            default:
                return (
                    <Phone value="8-8452-68-02-68" />
                )
        }
    }


    return (
        <>
            {isModalOpen && (
                <div className={isOverlayActive ? "overlay-on" : "overlay-off"}>
                    
                    <div className={`modal ${modalPosition}`}>
                        <div className="modal__wrapper">
                            <button
                                className="modal__close"
                                aria-label="Закрыть окно"
                                onClick={onClose}
                            >
                                <IconClose />
                            </button>
                            <h3 className="modal__title">{title}</h3>
                            {text && <p className="modal__text">{text}</p>}
                            {renderContent(content)}
                        </div>
                    </div>
                </div>
            )}
        </>

    )

}

export default ModalGeneral