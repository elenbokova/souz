import React from 'react';

const Phone = ({ value }) => {

    const formatPhoneNumber = (value) => {
        const digitsOnly = value.replace(/\D/g, '');
        const formatted = `tel:+7${digitsOnly.slice(1, 11)}`;
        return formatted;
    };

    return (
        <a href={formatPhoneNumber(value)}>
            {value}
        </a>
    );
};

export default Phone;


