import Link from "next/link";
import Title from "../Text/Title";

export default function MenuLink({ text, href="/", toggleShowMenu }) {
  return (
    <Link
      href={href}
      onClick={() => toggleShowMenu((prev) => false)}
      className="relative group cursor-pointer"
    >
      <div className="bg-white h-[1px] absolute left-0 top-1/2 w-[0px] group-hover:w-[8px] duration-300"></div>
      <div className="group-hover:translate-x-[10px] duration-300">
        <Title text={text} />
      </div>
    </Link>
  );
}
