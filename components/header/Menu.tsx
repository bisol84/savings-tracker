import Link from "next/link";
import React from "react";

export const Menu = () => {
  const menuItems = [
    { label: "Tableau de bord", href: "/dashboard" },
    { label: "Comptes", href: "/accounts" },
  ];

  return (
    <ul className="flex gap-4">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href} className="border-b-2">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
