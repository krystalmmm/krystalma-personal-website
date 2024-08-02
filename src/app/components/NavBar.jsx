"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  {
    title: "ABOUT",
    path: "#about",
  },
  {
    title: "EXPERIENCE",
    path: "#experience",
  },
  {
    title: "PROJECTS",
    path: "#projects",
  },
  {
    title: "CONTACT",
    path: "#contact",
  },
];

const NavBar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden": "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed mx-auto top-0 left-0 right-0 z-10 flex-row justify-between items-center sm:text-xs sm:hidden sm:items-center sm:justify-center"
    >
      <div className="flex container flex-col flex-wrap items-center justify-between mx-auto px-4 py-2 text-center sm:flex sm:items-center sm:justify-between lg:py-4">
        <div className="align-middle font-barlow font-light text-xl text-gray-100 text-opacity-50 " id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>

  );
};

export default NavBar;