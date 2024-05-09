import * as React from "react"

import Email from "../email"
import Phone from "../phone"
import PhoneForm from "../phone-form/phone-form"

import "./contacts.scss"

const Contacts = ({ contactsPhone, contactsEmail }) => {
    return (
        <div className="contacts">
            <h2 className="title-2 title-2__dark">Оставить заявку</h2>
            <p className="contacts__text">
                Оставьте заявку и мы перезвоним Вам в течении дня
            </p>
            <div className="contacts__wrapper">
                <div className="contacts__list">
                    {contactsPhone.map((item, i) => (
                        <Phone
                            key={i}
                            value={item}
                        />
                    ))}
                    {contactsEmail.map((item, i) => (
                        <Email
                            key={i}
                            value={item}
                        />
                    ))}
                </div>
                <PhoneForm isModal={false}/>
            </div>
        </div>
    )
}

export default Contacts