import React, { forwardRef } from "react";

export const TextInput = forwardRef(({ label, name, placeholder, ...rest }, ref) => {
    return (
        <label>
            <span className="visually-hidden">{label}</span>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                ref={ref} 
                {...rest} />
        </label>

    );    
});

export const TelInput = forwardRef(({ label, placeholder, ...rest }, ref) => {
    return (
        <label>
            <span className="visually-hidden">Телефон</span>
            <input
                type="tel"
                name="phone"
                placeholder={placeholder}
                ref={ref} 
                {...rest} />
        </label>

    );    
});