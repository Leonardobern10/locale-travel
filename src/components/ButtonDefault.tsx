import type { ButtonDefaultProps } from "src/types/ButtonDefaultProps";
import type { MouseEvent, ReactElement } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function ButtonDefault({
  buttonName,
  onClick,
  icon,
}: ButtonDefaultProps): ReactElement {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      className={` border-2 ${
        icon ? "flex flex-row items-center justify-between w-fit" : ""
      } bg-black h-12 text-white text-lg py-2 px-7 font-hunnin rounded-2xl hover:cursor-pointer hover:scale-95`}
    >
      {buttonName}{" "}
      {icon && (
        <span className="ml-2 flex items-center justify-center">
          <FaArrowTrendUp className="w-5 h-5 text-esmerald" />
        </span>
      )}
    </button>
  );
}
