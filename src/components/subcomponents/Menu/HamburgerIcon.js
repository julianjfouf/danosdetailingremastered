export default function HamburgerIcon({ showMenu, toggleShowMenu }) {
  return (
    <div
      onClick={() => {
        toggleShowMenu((menu) => {
          if (!menu) {
            window.scrollTo(0, 0);
          }
          return !menu;
        });
      }}
      className={`flex flex-col gap-[6px] ${
        showMenu ? `fixed` : `absolute`
      } left-6 cursor-pointer group w-[25px] hover:w-[30px] duration-300 z-30`}
    >
      <div
        style={{
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
        }}
        className={`bg-white h-[1px] w-full origin-center ${
          showMenu
            ? `rotate-[135deg] translate-y-[7px] group-hover:rotate-[360deg]`
            : null
        }`}
      ></div>
      <div
        style={{
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
        }}
        className={`bg-white h-[1px] w-full origin-center ${
          showMenu ? `opacity-0 !bg-white` : null
        }`}
      ></div>
      <div
        style={{
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0, 1) 0.025s",
        }}
        className={`bg-white h-[1px] w-full origin-center ${
          showMenu
            ? `rotate-[45deg] translate-y-[-7px] group-hover:rotate-[360deg]`
            : null
        }`}
      ></div>
    </div>
  );
}
