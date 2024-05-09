import React, { useState } from "react"


import Connect from "../../images/connect.svg"
import ConnectClose from "../../images/connect-close.svg"

import "./modal.scss"

const Modal = () => {

    const ESCAPE_KEY = 27;

    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleKeyDown = (e) => {
        if (isModalOpen) {
            if (e.keyCode === ESCAPE_KEY) {
                toggleModal();
            }
            // if (e.keyCode === TAB_KEY) {
            //     if (document.activeElement === lastNavLinkRef.current) {
            //         toggleModal();
            //     }
            // }
        }
    };

    return (
        <div className="modal"
            onKeyDown={handleKeyDown}>

            {isModalOpen && (
                <div className="modal__content">
                    <h4 className="modal__title">Ответим на любой вопрос в течении 1 часа</h4>
                    <form className="modal__form" action="#" method="POST">

                        <input type="text" placeholder="Имя" ref={firstInputRef} required />
                        <input type="email" placeholder="E-mail" required />
                        <textarea type="text" placeholder="Ваш вопрос" />
                        <button className="modal__button" type="submit">Отправить</button>

                    </form>
                    <strong>Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.</strong>
                </div>
            )}
            <button className="modal__toggle" onClick={toggleModal} aria-label={isModalOpen ? "Закрыть окно" : "Открыть окно"}>

                {
                    isModalOpen
                        ? <ConnectClose />
                        : <Connect />
                }
            </button>
        </div>
    )
}

export default Modal