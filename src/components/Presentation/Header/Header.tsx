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
      className="padding-h-content w-full h-20 py-1 flex flex-row items-center justify-between"
    >
      <div className="w-25 h-15">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </div>
      <NavBar items={items} />
    </header>
  );
}
