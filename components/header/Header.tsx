import React from "react";
import { Menu } from "./Menu";
import { MdSavings } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <nav className="flex p-4 justify-between items-center">
        <MdSavings size={40} />
        <Menu />
        <MdDarkMode />
      </nav>
    </>
  );
};
