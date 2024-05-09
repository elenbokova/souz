import React from "react";

import "./header-navigation.scss";


const HeaderNavigation = ({ navLinks, firstRef, lastRef, tabIndex, toggleMenu }) => {

    return (
        <>

            <nav className="header-navigation">
                <ul className="header-navigation__list">
                    {navLinks?.map((link, index) => (
                        <li className="header-navigation__item" key={link?.id}>
                            <a
                                href={`#${link?.id}` ?? ''}
                                ref={index === 0 ? firstRef : index === navLinks.length - 1 ? lastRef : null}
                                tabIndex={tabIndex}
                                onClick={toggleMenu}
                            >
                                {link?.title ?? ''}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )

}

export default HeaderNavigation

// observer for links highlighting

// import React, { useEffect, useRef } from "react";

// const HeaderNavigation = ({ navLinks }) => {
//     const headerRefs = useRef([]);

//     useEffect(() => {
//         const callback = (entries) => {
//    if(window.innerWidth <= 720) return;
//             entries.forEach((entry) => {
//                 const id = entry.target.getAttribute("id");
//                 if (entry.isIntersecting) {
//                     document.querySelector(`a[href="#${id}"]`).classList.add("active");
//                 } else {
//                     document.querySelector(`a[href="#${id}"]`).classList.remove("active");
//                 }
//             });
//         };
    
//         const observer = new IntersectionObserver(callback, {
//             rootMargin: "-50% 0px", // чтобы активная ссылка менялась при достижении середины экрана
//         });
    
//         const sections = headerRefs.current.map((ref) => document.getElementById(ref));
//         sections.forEach((section) => observer.observe(section));

//         return () => {
//             if (observer) {
//                 observer.disconnect();
//             }
//         };
//     }, [navLinks]);

//   return (
//     <nav>
//       <ul>
//         {navLinks.map((link, index) => {
//           headerRefs.current[index] = link.id;
//           return (
//             <li key={link.id}>
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default HeaderNavigation;