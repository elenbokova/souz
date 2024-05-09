import * as React from "react"

import "./arrow-button.scss"

const ArrowButton = ({ to }) => {
    return (
        <div className="arrow-button">
            <a className="arrow-button__link" href={`#${to}`}>
                <img alt="arrow"
                    src="data:image/svg+xml,%3Csvg width='38' height='18' 
                    viewBox='0 0 38.417 18.592' 
                    xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z' fill='%23ebda5b'/%3E%3C/svg%3E" />
            </a>
        </div>
    )
}


export default ArrowButton

