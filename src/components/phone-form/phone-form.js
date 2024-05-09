import React, { useRef } from "react"

import useFocusOnModalOpen from "../../hooks/useFocusOnModalOpen";
import { TextInput, TelInput } from "../form-components/form-components";

import "./phone-form.scss"

const PhoneForm = ({ isModal }) => {

    let focusRef = useRef(null);

    useFocusOnModalOpen(isModal, focusRef);

    return (
        <form className="phone-form" action="#" method="POST">
            <TextInput
                ref={isModal ? focusRef : null}
                label="Имя"
                name="name"
                placeholder="Имя"
                minLength="2"
                required
            />
            <TelInput
                placeholder="+7 (999) 999-99-99"
                minLength="15"
                maxLength="18" 
                required
            />

            {isModal ? (
                <button className="modal__button" type="submit">Отправить</button>
            ) : (
                <button className="button" type="submit">Отправить</button>
            )}

            {isModal && (
                <strong>Нажимая на кнопку, вы даете согласие на обработку своих персональных данных.</strong>
            )}
        </form>
    )
}

export default PhoneForm