import React, { useRef, useState } from "react"

import useFocusOnModalOpen from "../../hooks/useFocusOnModalOpen";
import { TextInput, PhoneInput } from "../form-components/form-components";

import "./phone-form.scss"

const PhoneForm = ({ isModal }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // const onFormSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = { name, phone };

  //   try {
  //     const response = await fetch('http://localhost:7000/sendmail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       console.log('Сообщение отправлено');
  //       // Очистка формы или другие действия после отправки
  //     } else {
  //       console.error('Ошибка при отправке сообщения');
  //     }
  //   } catch (error) {
  //     console.error('Ошибка при отправке сообщения', error);
  //   }
  // };

  //   const onFormSubmit = async (event) => {
  //     event.preventDefault();

  //     const data = { name, phone };

  //     try {
  //         const response = await fetch('/.netlify/functions/sendmail', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(data),
  //         });

  //         if (response.ok) {
  //           console.log('Сообщение отправлено');
  //           // Очистка формы или другие действия после отправки
  //         } else {
  //           console.error('Ошибка при отправке сообщения');
  //         }
  //       } catch (error) {
  //         console.error('Ошибка при отправке формы', error);
  //       }
  // };

  let focusRef = useRef(null);
  useFocusOnModalOpen(isModal, focusRef);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify({ name, phone }),
      });
      if (response.ok) {
        console.log('Сообщение отправлено успешно');
        // Очистка формы или другие действия после отправки
      } else {
        console.error('Ошибка при отправке сообщения');
      }
    } catch (error) {
      console.error("Ошибка при отправке формы", error);
    }

  }

  return (
    <form
      name="phone-form"
      className="phone-form"
      method="POST"
      onSubmit={onFormSubmit}

      // netlify
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="phone-form" />

      <TextInput
        ref={isModal ? focusRef : null}
        label="Имя"
        name="name"
        placeholder="Имя"
        minLength="2"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <PhoneInput
        placeholder="+7 (999) 999-99-99"
        minLength="15"
        maxLength="18"
        required
        onChange={(e) => setPhone(e.target.value)}
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