"use client";

import Image from "next/image";
import Logo from "../../public/logos/danosdetailinglogo.png";
import HamburgerIcon from "./subcomponents/Menu/HamburgerIcon";
import { useState } from "react";
import Menu from "./subcomponents/Menu/Menu";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, toggleShowMenu] = useState(false);
  return (
    <nav className="p-6 bg-black text-white flex justify-center items-center">
      <HamburgerIcon showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
      <Menu showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
      <Link href="/">
        <Image
          className="aspect-auto"
          src={Logo}
          alt="Dano's Detailing Logo"
          quality={80}
          priority
        />
      </Link>
    </nav>
  );
}
