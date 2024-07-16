"use client";

import Image from "next/image";
import Logo from "../../public/logos/danosdetailinglogo.png";
import HamburgerIcon from "./subcomponents/Menu/HamburgerIcon";
import { useEffect, useState } from "react";
import Menu from "./subcomponents/Menu/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showMenu, toggleShowMenu] = useState(false);
  const [Hrefs, setHrefs] = useState([
    "/ceramic-coating",
    "/paint-correction",
    "/exterior-detailing",
    "/interior-detailing",
  ]);
  const [logoHref, setLogoHrerf] = useState("/");
  const [currentPathname, setCurrentPathname] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    if (
      !pathname.includes("/mountain-house") &&
      !pathname.includes("/lathrop") &&
      (currentPathname.includes("/mountain-house") ||
        currentPathname.includes("/lathrop"))
    ) {
      setHrefs([
        "/ceramic-coating",
        "/paint-correction",
        "/exterior-detailing",
        "/interior-detailing",
      ]);
      setLogoHrerf("/");
      setCurrentPathname(pathname);
    } else if (
      pathname.includes("/mountain-house") &&
      !currentPathname.includes("/mountain-house")
    ) {
      setHrefs([
        "/mountain-house/ceramic-coating",
        "/mountain-house/paint-correction",
        "/mountain-house/exterior-detailing",
        "/mountain-house/interior-detailing",
      ]);
      setLogoHrerf("/mountain-house");
      setCurrentPathname(pathname);
    } else if (
      pathname.includes("/lathrop") &&
      !currentPathname.includes("/lathrop")
    ) {
      setHrefs([
        "/lathrop/ceramic-coating",
        "/lathrop/paint-correction",
        "/lathrop/exterior-detailing",
        "/lathrop/interior-detailing",
      ]);
      setLogoHrerf("/lathrop");
      setCurrentPathname(pathname);
    }
  }, [pathname]);
  return (
    <nav className="p-6 bg-black text-white flex justify-center items-center">
      <HamburgerIcon showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
      <Menu hrefs={Hrefs} showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
      <Link href={logoHref}>
        <Image
          className="aspect-auto w-[100px] h-auto"
          src={Logo}
          alt="Dano's Detailing Logo"
          width={100}
          height={61}
          quality={100}
          priority
        />
      </Link>
    </nav>
  );
}
