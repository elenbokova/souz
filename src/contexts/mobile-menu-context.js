import React, { createContext, useState } from "react";

export const MobileMenuContext = createContext();

export const MobileMenuContextProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setMenuOpen, toggleMenu }} >
      {children}
    </MobileMenuContext.Provider>
  );
};