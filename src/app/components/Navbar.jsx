"use client";
import Link from "next/link";
import { React, useState } from "react";
import NavLink from "./NavLink.jsx";
// import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import MenuOverlay from "./MenuOverlay.jsx";

export const NavLinks = [
    {
        title: "About Me",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1e0530] bg-opacity-90 px-6 py-2">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 rounded-lg">
                <Link
                    href={"/"}
                    className="text-2xl md:text-3xl text-[#f5d5e0] font-semibold"
                >
                    KK
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarToggle ? (
                        <button
                            onClick={() => setNavbarToggle(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <RiMenu3Line className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarToggle(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <RiCloseLine className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:space-x-8 flex-row mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarToggle ? <MenuOverlay links={NavLinks} /> : null}
        </nav>
    );
};

export default Navbar;
