"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Paragraph from "./Text/Paragraph";
import { useEffect, useState } from "react";

export default function FooterLink({ service, serviceHref }) {
  const [href, setHref] = useState(serviceHref);
  const [currentPathname, setCurrentPathname] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    if (
      !pathname.includes("/mountain-house") &&
      !pathname.includes("/lathrop") &&
      (currentPathname.includes("/mountain-house") || currentPathname.includes("/lathrop"))
    ) {
      setHref(serviceHref);
      setCurrentPathname(pathname);
    } else if (
      pathname.includes("/mountain-house") &&
      !currentPathname.includes("/mountain-house")
    ) {
      setHref("/mountain-house" + serviceHref);
      setCurrentPathname(pathname);
    } else if (
      pathname.includes("/lathrop") &&
      !currentPathname.includes("/lathrop")
    ) {
      setHref("/lathrop" + serviceHref);
      setCurrentPathname(pathname);
    }
  }, [pathname]);
  return (
    <Link href={href}>
      <Paragraph text={service} />
    </Link>
  );
}
