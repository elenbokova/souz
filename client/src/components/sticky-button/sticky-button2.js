import React from "react"

import "./sticky-button.scss"

const StickyButton2 = React.memo( ({onTestClick}) => {
    console.log('sticky button 2 rendered')

    return (
        <button onClick={onTestClick}>
            кнопка проверка
        </button>
    )
});

export default StickyButton2