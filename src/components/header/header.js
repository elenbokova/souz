import React, { useContext, useState, useEffect, useRef } from "react";
import { MobileMenuContext } from "../../contexts/mobile-menu-context";

import Burger from "../burger/burger";
import HeaderNavigation from "../header-navigation/header-navigation";

import "./header.scss";

const Header = ({ navLinks }) => {

    const ESCAPE_KEY = 27;
    const TAB_KEY = 9;

    let firstNavLinkRef = useRef(null);
    let lastNavLinkRef = useRef(null);

    const { isMenuOpen, toggleMenu } = useContext(MobileMenuContext);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        if (isMenuOpen) { 
            firstNavLinkRef.current.focus();
        }
    }, [isMenuOpen]);

  
    const handleKeyDown = (e) => {
        if (isMenuOpen) {
            if (e.keyCode === ESCAPE_KEY) {
                toggleMenu();
            }
            if (e.keyCode === TAB_KEY) {
                if (document.activeElement === lastNavLinkRef.current) {
                    toggleMenu();
                }
            }
        }
    };

    return (
        <>
            <Burger
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                aria-controls="links"
            />

            <header
                className={`header${isMenuOpen ? ' opened' : ''}`}
                onKeyDown={handleKeyDown}
            >
                <div className="container">
                    <HeaderNavigation 
                    navLinks={navLinks} 
                    firstRef={firstNavLinkRef}
                    lastRef={lastNavLinkRef}
                    tabIndex={isMenuOpen || windowWidth > 768 ? 0 : -1}
                    toggleMenu={isMenuOpen? toggleMenu : null}
                    />
                </div>
            </header>
        </>
    )
}

export default Header
