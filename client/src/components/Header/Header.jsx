import Logo from "../../assets/images/logo.webp";
import userProfile from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/doctors",
    label: "Find a Doctor",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={Logo} alt="logo" width={140} />
          </div>

          {/* navigation route */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor font-[600] text-[16px] leading-7"
                        : "text-textColor font-[500] text-[16px] leading-7 hover:text-primaryColor"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* auth route */}
          <div className="flex items-center gap-4">
            {/* user profile image */}
            <div className="hidden">
              <Link to={"/"}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userProfile}
                    alt="profile"
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>
            </div>

            <Link to={"/sign-in"}>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Sign In
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
