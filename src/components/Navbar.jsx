import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  XCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const darkMode = "dark";
  const lightMode = "light";
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  // console.log(darkQuery, "darkQuery");
  const clickMenu = () => {
    setNavbar(!navbar);
    // console.log("clicked");
  };

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();

  const changeMode = () => {
    setTheme(theme == darkMode ? lightMode : darkMode);
  };

  useEffect(() => {
    switch (theme) {
      case darkMode:
        element.classList.add("dark");
        localStorage.setItem("theme", darkMode);

        break;
      case lightMode:
        element.classList.remove("dark");
        localStorage.setItem("theme", lightMode);

        break;
      default:
        localStorage.removeItem("theme");

        break;
    }
  }, [theme]);
  return (
    <div className="main-nav fixed bg-[#f8ede30d] drop-shadow-3xl dark:border-[#24222e] border-[#dad2dc] border-b-2 w-screen z-10 h-20 mx-auto px-4 flex justify-between items-center dark:text-light text-[#2D3748]">
      <a href="#" className="flex items-center">
        <div className="logo-container relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7928CA] to-[#FF0080] rounded-lg transform rotate-6 transition-transform duration-300 hover:rotate-12"></div>
          <span className="relative font-bold text-2xl text-white font-montserrat tracking-wider">PD</span>
        </div>
      </a>
      <ul className="hidden md:flex">
        <li className="nav-item p-4">
          <a href=""> Home</a>
        </li>
        <li className="nav-item p-4">
          <a href="#about">About</a>
        </li>
        <li className="nav-item p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item p-4">
          <a href="#contact">Contact</a>
        </li>
        <div onClick={changeMode} className="flex items-center">
          {theme == "light" ? (
            <li className="mr-4 p-3 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-all">
                <MoonIcon className="w-6 h-6 text-[#6B46C1]" />
              </div>
            </li>
          ) : (
            <li className="mr-4 p-3 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center">
                <SunIcon className="w-6 h-6 text-white" />
              </div>
            </li>
          )}
        </div>
      </ul>

      <div className="md:hidden" onClick={clickMenu}>
        {!navbar ? (
          <MenuIcon className="w-7 h-7 text-[#6B46C1] dark:text-white cursor-pointer" />
        ) : (
          <XCircleIcon className="w-7 h-7 text-[#6B46C1] dark:text-white cursor-pointer" />
        )}
      </div>

      <ul
        className={
          !navbar
            ? "hidden"
            : " dark:bg-[#4e4c4c42] transition-all mobile-nav bg-white/95 flex-col border-b-2 dark:border-[#24222e] border-[#e1e1e1] flex fixed items-center dark:text-white text-[#2D3748] inset-0 justify-center z-100 mt-20 p-10 h-96"
        }
      >
        <li className="nav-item p-4">
          <a href=""> Home</a>
        </li>
        <li className="nav-item p-4">
          <a href="#about">About</a>
        </li>
        <li className="nav-item p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item p-4">
          <a href="#contact">Contact</a>
        </li>
        <div onClick={changeMode} className="flex items-center">
          {theme == "light" ? (
            <li className="mr-4 p-3 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-all">
                <MoonIcon className="w-6 h-6 text-[#6B46C1]" />
              </div>
            </li>
          ) : (
            <li className="mr-4 p-3 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center">
                <SunIcon className="w-6 h-6 text-white" />
              </div>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
