import type { ReactElement } from "react";
import ButtonHeader from "../../ButtonHeader";
import { iconsButton } from "@data/ButtonIcons";
import type { NavBarProps } from "src/types/NavBarProps";

export default function NavBar({ items }: NavBarProps): ReactElement {
  return (
    <nav className="w-fit flex flex-row items-center justify-evenly gap-x-8">
      <ul className="flex flex-row items-center justify-evenly gap-x-8 font-hunnin ">
        {items.map((el, index) => (
          <li
            className="text-md font-bold text-white text-shadow-2xs text-shadow-black hover:cursor-pointer hover:text-shadow-xs hover:text-shadow-esmerald"
            key={index}
          >
            {el}
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-between gap-x-3">
        {iconsButton.map((el) => (
          <ButtonHeader icon={el} />
        ))}
      </div>
    </nav>
  );
}
