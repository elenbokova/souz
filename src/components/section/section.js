import * as React from "react"

import "./section.scss"

const Section = ({children, theme = "", id}) => {
    return (
        <section className={`section ${theme}`} id={id}>
            <div className="container">
            {children}
            </div>
        </section>
    )
}

export default Section