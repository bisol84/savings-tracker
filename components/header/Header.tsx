import React from "react";
import { Menu } from "./Menu";
import { Separator } from "../ui/separator";

export const Header = () => {
  return (
    <>
      <nav className="flex p-4 justify-between items-center">
        logo
        <Menu />
        style
      </nav>
    </>
  );
};
