import { useRef, type ReactElement } from "react";
import logo from "@images/logo.svg";
import NavBar from "./NavBar";
import { items } from "../../../data/NavBarItems";
import { useScroll } from "src/animation/scroll";

export default function Header(): ReactElement {
  const headerRef = useRef<HTMLDivElement>(null);

  useScroll(headerRef, 1.5, 0, -50);

  return (
    <header
      ref={headerRef}
      className="padding-h-content w-full h-16 md:h-20 py-1 flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-y-0"
    >
      <div className="w-28 h-12 md:w-25 md:h-15 flex-shrink-0 flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <NavBar items={items} />
      </div>
    </header>
  );
}
