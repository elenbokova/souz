import React, { useContext } from "react";

import { MobileMenuContext } from "../../contexts/mobile-menu-context"

import GrayLayout from "../gray-layout/gray-layout"

import "./page.scss"

const Page = ({ children }) => {

    const { isMenuOpen, toggleMenu } = useContext(MobileMenuContext);

    return (
        <div className='page'>
            {children}
            <GrayLayout isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
    )
}

export default Page