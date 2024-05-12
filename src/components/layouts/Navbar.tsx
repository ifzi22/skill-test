"use client";

import { MenuNavigationType } from "@/types/menu.types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuNavigation: MenuNavigationType[] = [
  {
    text: "Blog",
    link: "/",
  },
  {
    text: "User",
    link: "/users",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white py-8 sticky top-0 z-10">
      <div className="flex flex-col max-w-screen-sm mx-auto">
        <h1 className="text-2xl font-semibold">Practice</h1>
        <ul className="flex mt-4 gap-8">
          {menuNavigation.map(({ link, text }, i) => (
            <li key={i}>
              <Link
                href={link}
                className={
                  pathname === link ? "text-gray-700" : "text-gray-400"
                }
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
